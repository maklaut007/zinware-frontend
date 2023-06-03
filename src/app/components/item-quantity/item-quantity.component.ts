import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss'],
})
export class ItemQuantityComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  increaseQuantity() {
    this.quantity++;
    this.emitQuantity();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.emitQuantity();
    }
  }

  emitQuantity() {
    this.quantityChange.emit(this.quantity);
  }
}
