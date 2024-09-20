import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  user: UserModel | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      const users = JSON.parse(localStorage.getItem('userListG') || '[]');
      this.user = users.find((user: any) => user.id === parseInt(userId, 10));
    }
  }

  back(): void {
    window.history.back();
  }
}
