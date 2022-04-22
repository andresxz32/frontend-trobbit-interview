import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() race: string = '';
  @Input() img: string = '';
  @Input() id: string;
  @Input() age: number;
  @Output() readonly updateCat: EventEmitter<string> = new EventEmitter<string>();
  @Output() readonly deleteCat: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  update() {}

  delete() {
    this.deleteCat.emit(this.id)
  }
}
