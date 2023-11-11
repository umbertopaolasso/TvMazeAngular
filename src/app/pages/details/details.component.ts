import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api/ApiService';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id: number = 0;
  details?: ShowDetails;

  f: boolean = true;
  a: any = [{ nome: 'assd' }, { nome: 'assd' }, { nome: 'assd' }];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe((params) => {
      const id = params['name']; // Converto il parametro in un numero, se necessario
      // console.log(id);
      this.id = id;
    });
  }

  getPlainTextSummary(description:string): string {
    return description.replace(/<[^>]*>/g, '') || '';
  }

  ngOnInit(): void {
    // Il codice da eseguire quando il componente viene inizializzato
    console.log('Il componente è stato inizializzato');
    this.apiService.getDetailsById(this.id).subscribe((dati) => {
      console.log(dati);
      this.details = dati;
      console.log('dettagli', this.details);
    });
  }
}
