import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss'],
})
export class ItemQuantityComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Increases the quantity of item in cart by one.
   */
  increaseQuantity() {
    this.quantity++;
    this.emitQuantity();
  }
  /**
   * Decreases the quantity of item in cart by one.
   */
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.emitQuantity();
    }
  }

  /**
   * Emits the quantity of item in cart to parent component.
   */
  emitQuantity() {
    this.quantityChange.emit(this.quantity);
  }
}
