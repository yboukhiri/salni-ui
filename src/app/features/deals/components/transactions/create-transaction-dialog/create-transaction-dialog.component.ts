import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateTransactionDto, UserDto } from 'src/app/generated-api';

@Component({
  selector: 'app-create-transaction-dialog',
  templateUrl: './create-transaction-dialog.component.html',
  styleUrls: ['./create-transaction-dialog.component.scss'],
})
export class CreateTransactionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDto
  ) {}

  transaction: CreateTransactionDto = {
    toUserId: this.data.id,
    amount: 0,
    currency: 'EUR',
  };

  currencies = ['EUR', 'USD', 'GBP'];

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onOkClick() {
    this.dialogRef.close(this.transaction);
  }
}
