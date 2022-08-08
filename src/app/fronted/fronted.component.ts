import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';


@Component({
  selector: 'app-fronted',
  templateUrl: './fronted.component.html',
  styleUrls: ['./fronted.component.css']
})

export class FrontedComponent implements OnInit {
  
  constructor(private firstservice:FirstserviceService) {
   }

  ngOnInit(): void {

    this.firstservice.saludar()
  }

}
