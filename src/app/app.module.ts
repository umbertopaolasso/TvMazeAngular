import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './pages/details/details.component';
import { AppRoutingModuleModule } from './app-routing-module.module';

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'details', component: DetailsComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   // { path: '**', component: PageNotFoundComponent }, // Gestione della route non trovata
// ];

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule,ReactiveFormsModule, AppRoutingModuleModule], // Aggiungi HttpClientModule qui
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
