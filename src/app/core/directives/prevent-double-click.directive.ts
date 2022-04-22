import { takeUntil, throttleTime } from 'rxjs/operators';
import {
    Directive,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
    selector: '[appPreventDoubleClick]',
})
export class PreventDoubleClickDirective implements OnInit, OnDestroy {
    @Input() throttleTime = 500;
    @Output() throttledClick = new EventEmitter();
    private _clicks = new Subject();
    private _unsubscribeAll: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    ngOnInit() {
        this._clicks
            .pipe(
                //se elimina la suscripción al destruirse la directiva
                takeUntil(this._unsubscribeAll),
                //se crea un delay entre clicks
                throttleTime(this.throttleTime)
            )
            //se emite el evento para disparar la acción del click
            .subscribe((e) => this.emitThrottledClick(e));
    }

    emitThrottledClick(e) {
        this.throttledClick.emit(e);
    }

    ngOnDestroy() {
        this._unsubscribeAll.next(true);
        this._unsubscribeAll.complete();
    }

    //se toma el click del ususario
    @HostListener('click', ['$event'])
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this._clicks.next(event);
    }
}
