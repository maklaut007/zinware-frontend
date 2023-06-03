import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss'],
})
export class ItemQuantityComponent {
  @Input() quantity: number = 1;
}
