import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './horizontal-navigation.component.html',
  styleUrls: ['./horizontal-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
