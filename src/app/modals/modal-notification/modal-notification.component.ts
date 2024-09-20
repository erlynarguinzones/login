import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrl: './modal-notification.component.css',
})
export class ModalNotificationComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
