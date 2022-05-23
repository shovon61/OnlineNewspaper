import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  entertainmentnewsDisplay:any=[];

  ngOnInit(): void {
    this._services.entertainmentnews().subscribe((result)=>{
      console.log(result);
       this.entertainmentnewsDisplay=result.articles;
    })
  }
}
