import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor(private http: HttpClient) {
    
   }

  public saludar(){
      this.http.get('https://rickandmortyapi.com/api/character').subscribe(data =>{
        console.log(data)
      })
  }
}
