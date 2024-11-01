import { Component, inject } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  template: `
       @if (cartService.cartIsEmpty()) {
          <div class="text-center my-6 bg-base-100">No Items in Cart</div>
      } @else {
          <div class="overflow-x-auto bg-slate-900">
              <table class="table bg-slate-900">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Cost</th>
                      <th>Remove</th>
                  </tr>
                  </thead>
                  <tbody>

                      @for (item of cartService.items(); track item.id) {
                          <tr>
                              <th>{{$index + 1}}</th>
                              <td>{{ item.name }}</td>
                              <td>€ {{item.cost}}</td>
                              <td class="cursor-pointer" (click)="cartService.removeFromCart(item)">❌</td>
                          </tr>
                      }
                  </tbody>
              </table>
          </div>

          <div class="text-xl my-6 flex justify-end mt-0 bg-slate-900">
              TOTAL: € {{cartService.totalCartCost()}}
          </div>
      }
 

  `,
  styles: ``
})
export default class CartComponent {

  cartService = inject(CartService)

}
