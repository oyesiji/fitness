import {MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatListModule  } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
   ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
   ]
})
export class MaterialModule { }