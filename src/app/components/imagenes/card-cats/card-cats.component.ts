import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'card-cats',
  templateUrl: './card-cats.component.html',
  styleUrls: ['./card-cats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCatsComponent implements OnInit {
  @Input() name: string = '';
  @Input() race: string = '';
  @Input() img: string = '';
  @Input() id: string;
  @Output() readonly likeMe: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  like() {
    this.likeMe.emit(this.id);
  }

  shared() {}
}
