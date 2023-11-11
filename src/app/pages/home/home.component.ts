// home.component.ts
import { Component } from '@angular/core';
import { ApiService } from 'src/app/api/ApiService';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userInput: string = '';
  response: Show[] = [];
  userInputControl = new FormControl('');

  constructor(private apiService: ApiService, private router: Router) {
    this.userInputControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        this.userInput = value ?? '';
        this.printName();
      });
  }

  printName() {
    this.apiService.getDatiApi(this.userInput).subscribe((dati) => {
      console.log(dati);
      this.response = dati;
    });
  }

  navigateToDetailsPage(name: string) {
    this.router.navigate([`/details/${name}`]);
  }
}
