import { Component, inject, signal } from '@angular/core';
import { Product } from '../../model/products';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
   
   <div class="flex gap-6 justify-center bg-base-100 ">

              @for (product of products(); track product.id) {

                
                <div class="card bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img
                    [src]="product.image"
                   [alt]="product.name" />
                  </figure>
                <div class="card-body">
                  <div class="flex justify-between">
                    <h2 class="card-title">{{product.name}}</h2>
                    <div class="card-title">€ {{product.cost}}</div>
                  </div>
                  <p>{{product.description}}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary"
                    (click)="cartService.addToCart(product)"
                    >Add to Cart</button>
                  </div>
              </div>
            </div>
  }
  </div>
  
  `,
  styles: ``
})
export default class HomeComponent {

products=signal<Product[]>(initialState)
cartService=inject(CartService)

}


const initialState:Product[]=[
  {
    id: 1,
    name: "Shoes",
    image: "/assets/images/scarpa.jpg",
    description: "lorem...",
    cost: 100
  },
  {
    id: 2,
    name: "Smartphone",
    description: "lorem...",
    image: "/assets/images/smartphone.jpg",
    cost: 500
  },
  {
    id: 3,
    name: "Tablet",
    description: "lorem...",
    image: "/assets/images/tablet.jpg",
    cost: 250
  }

]