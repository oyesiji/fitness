import {MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule ],
})
export class MaterialModule { }