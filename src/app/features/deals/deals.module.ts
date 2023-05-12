import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTransactionDialogComponent } from './components/transactions/create-transaction-dialog/create-transaction-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [TransactionsComponent, CreateTransactionDialogComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [TransactionsComponent],
  providers: [],
})
export class DealsModule {}
