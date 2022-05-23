import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  sciencenewsDisplay:any = [];

  ngOnInit(): void {
    this._services.sciencenews().subscribe((result)=>{
      console.log(result);
       this.sciencenewsDisplay=result.articles;
    })
  }

}
