import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';


@Component({
  selector: 'app-fronted',
  templateUrl: './fronted.component.html',
  styleUrls: ['./fronted.component.css']
})

export class FrontedComponent implements OnInit {
  
  listbooks: any;
  constructor(private firstservice:FirstserviceService) {
   }



  ngOnInit(): void {

  }

  public showBook(): void {
    this.firstservice.getbooks().subscribe((result)=>{
      console.log('datos del servidor');
      console.log(result)

      this.listbooks = result
    })
  }

}
