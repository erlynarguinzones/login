import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ModalNotificationComponent } from '../modals/modal-notification/modal-notification.component';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
})
export class AccessComponent {
  accesoForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private usuariosService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.accesoForm = this.fb.group({
      email: ['Sincere@april.biz', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.accesoForm.valid) {
      const email = this.accesoForm.get('email')?.value;
      this.usuariosService.getUsuarios().subscribe((list) => {
        const user = list.find((user: UserModel) => user.email === email);
        if (user) {
          localStorage.setItem('userListG', JSON.stringify(list));
          localStorage.setItem('authTokenG', JSON.stringify('true'));
          this.router.navigate(['/home']);
        } else {
          this.dialog.open(ModalNotificationComponent, {
            width: '250px',
            data: { message: 'Usuario no encontrado...' },
          });
        }
      });
    } else {
      this.dialog.open(ModalNotificationComponent, {
        width: '250px',
        data: { message: 'Error en el servidor' },
      });
    }
  }
}
