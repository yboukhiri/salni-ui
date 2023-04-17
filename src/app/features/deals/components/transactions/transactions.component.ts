import { Component, Input } from '@angular/core';
import { Deal } from '../../models/deal.model';
import { Transaction } from '../../models/transaction.model';
import { DealsService } from '../../services/deals.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  constructor(private dealsService: DealsService) {}

  deal: Deal | undefined;

  @Input()
  withUserOfId: number | undefined;

  ngOnInit(): void {
    if (!this.withUserOfId) {
      return;
    }
    this.dealsService.getDeal(this.withUserOfId).subscribe((deal) => {
      console.log(deal);
      this.deal = deal;
    });
  }

  isTransactionAccepted(transaction: Transaction): boolean {
    return transaction.accepted;
  }
}
