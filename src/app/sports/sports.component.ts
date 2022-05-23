import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  constructor(private _services : NewsapiserviceService) { }
  sportsnewsDisplay:any = [];

  ngOnInit(): void {
    this._services.sportsnews().subscribe((result)=>{
      console.log(result);
       this.sportsnewsDisplay=result.articles;
    })
  }

}
