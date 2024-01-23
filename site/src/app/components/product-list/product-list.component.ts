import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <h2 class="mb">{{title}}</h2>
    <h4 class="mb">{{subtitle}}</h4>
    <ul class="products">
      @for (p of products; track p.id) {
        <li class="product-item" [routerLink]="'/product/' + p.id">
          <div class="product-image">
            <img [src]="p.image" [alt]="p.title" />
          </div>
          <div class="product-info">
            <h3>{{p.title}}</h3>
            <p class="hit">{{p.text}}</p>
            <p class="hit">{{p.time}}</p>
          </div>
        </li>
      }
    </ul>
  `,
})
export class ProductListComponent {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public products: IProduct[] = [];
}
