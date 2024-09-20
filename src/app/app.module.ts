import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [AppComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule, MatDialogModule],
  providers: [UserService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
