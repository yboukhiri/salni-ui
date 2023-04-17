import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DealsService } from './services/deals.service';

@NgModule({
  declarations: [TransactionsComponent],
  imports: [CommonModule],
  exports: [TransactionsComponent],
  providers: [DealsService],
})
export class DealsModule {}
