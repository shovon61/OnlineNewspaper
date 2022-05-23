import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }
  
  businessnewsDisplay: any=[];

  ngOnInit(): void {
    this._services.businessnews().subscribe((result)=>{
      console.log(result);
       this.businessnewsDisplay=result.articles;
    })
  }
}
