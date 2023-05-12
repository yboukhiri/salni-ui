import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  DealDto,
  DealsService,
  TransactionDto,
  UserDto,
} from 'src/app/generated-api';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { CreateTransactionDialogComponent } from './create-transaction-dialog/create-transaction-dialog.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnChanges {
  constructor(private dealsService: DealsService, public dialog: MatDialog) {}

  deal: DealDto | undefined;

  @Input()
  friend: UserDto | null = null;

  faPlus = faPlus;

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDeal();
  }

  isTransactionAccepted(transaction: TransactionDto): boolean {
    return transaction.accepted;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTransactionDialogComponent, {
      data: this.friend,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dealsService
          .dealsControllerCreateTransaction(result)
          .subscribe((transaction) => {
            this.updateDeal();
          });
      }
    });
  }

  updateDeal() {
    if (!this.friend) {
      return;
    }
    this.dealsService
      .dealsControllerGetDealWithUserId(this.friend.id)
      .subscribe({
        next: (deal) => {
          this.deal = deal;
        },
      });
  }
}
