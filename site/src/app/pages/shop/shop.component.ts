import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list 
      title="Development"
      subtitle=""
      [products]="productsService.byGroup['development']"
    />
    <app-product-list 
      title="Design"
      subtitle=""
      [products]="productsService.byGroup['design']"
    />
    <app-product-list 
      title="Marketing"
      subtitle=""
      [products]="productsService.byGroup['marketing']"
    />
  `,
})
export class ShopComponent implements OnInit {
  private telegramService = inject(TelegramService);
  protected productsService = inject(ProductsService);

  public ngOnInit(): void {
    this.telegramService.BackButton.hide();
  }
}
