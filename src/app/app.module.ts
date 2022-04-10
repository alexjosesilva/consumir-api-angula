import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosService } from './alunos/alunos.service';
import { importType } from '@angular/compiler/src/output/output_ast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MaterialExampleModule } from '../material.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientTestingModule,
    HttpTestingController
  ],
  providers: [AlunosService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
