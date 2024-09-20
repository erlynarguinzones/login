import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';

@NgModule({
  declarations: [AccessComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AccessModule {}
