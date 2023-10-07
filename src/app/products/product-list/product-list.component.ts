import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct = ""

  onBuy(product : string) {
    window.alert(`You just bought ${product}!`);
  }
  
}
