import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
