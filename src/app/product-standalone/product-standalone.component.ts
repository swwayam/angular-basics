import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-standalone.component.html',
  styleUrls: ['./product-standalone.component.css']
})
export class ProductStandaloneComponent {

}
