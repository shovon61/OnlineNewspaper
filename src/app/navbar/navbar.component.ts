import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

topheadingDisplay:any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
      console.log(result);
       this.topheadingDisplay=result.articles;
    })
  }
}
