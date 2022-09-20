import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor(private http: HttpClient) {
    
   }

  public getbooks(): Observable<any>  {
    //let url = 'http://localhost:2020/api/book/all';
    let url = '/api/book/all';
    return this.http.get(url)  
    
  }
}
