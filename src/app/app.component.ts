import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-navbar />

    <div class="max-w-screen-md mx-auto bg bg-red-400">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular 17+  shoppingCart -';
}
