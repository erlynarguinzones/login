import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalNotificationComponent } from '../modals/modal-notification/modal-notification.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  usuarios: any[] = [];
  accesoForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private usuariosService: UserService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.accesoForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe((list) => {
      this.usuarios = list;
    });
  }

  goToUserDetail(userId: number): void {
    this.router.navigate(['/userDetail', userId]);
  }

  onSubmit(): void {
    if (this.accesoForm.valid) {
      const email = this.accesoForm.get('email')?.value;
      this.usuariosService.getUsuarios().subscribe((list) => {
        if (list.find((user: any) => user.email === email)) {
          localStorage.setItem('userListG', JSON.stringify(list));
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

  logout() {
    localStorage.removeItem('userListG');
    localStorage.removeItem('authTokenG');
    this.router.navigate(['/']);
  }
}
