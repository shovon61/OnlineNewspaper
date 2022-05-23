import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  healthnewsDisplay:any = [];

  ngOnInit(): void {
    this._services.healthnews().subscribe((result)=>{
      console.log(result);
       this.healthnewsDisplay=result.articles;
    })
  }

}
