import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSnackBarModule, BrowserAnimationsModule],
  providers: [SnackbarService],
})
export class SharedModule {}
