import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private username: string;
  private clientID: 'b0096ac6d420a3b2c4ce';
  private clientSecret:'5fd881e86b8fe14975c7a703a825f8c95ee67bab';

  constructor(private http: Http) {
    this.username = 'Wess58';
  }


}
