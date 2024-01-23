import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/products';

@Component({
  selector: 'app-product',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="centered">
      @if (product) {
        <h2 class="mb">{{product.title}}</h2>
        <br />
        <img [src]="product.image" [alt]="product.title" />
        <p>{{product.text}}</p>
        <p>{{product.time}}</p>
        <a [href]="product.link" target="_blank">See this course</a>
      } @else {
        <h2>No product with id: {{id}}</h2>
      }
    </div>
  `,
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() public id: string = '';
  
  private telegramService = inject(TelegramService);
  private productsService = inject(ProductsService);
  private router = inject(Router);

  protected product: IProduct | undefined;
  
  public ngOnInit(): void {
    this.back = this.back.bind(this);
    this.product = this.productsService.getById(this.id);
    
    this.telegramService.BackButton.show();
    this.telegramService.BackButton.onClick(this.back);
  }
  
  private back(): void {
    this.router.navigate(['/']);
  }

  public ngOnDestroy(): void {
    this.telegramService.BackButton.offClick(this.back);
  }
}
