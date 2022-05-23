import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=20383ba69952483e96ed64c0444cdc44";
  
  technewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=20383ba69952483e96ed64c0444cdc44";

  businessnewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=20383ba69952483e96ed64c0444cdc44";

  entertainmentnewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=20383ba69952483e96ed64c0444cdc44";

  sportsnewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=20383ba69952483e96ed64c0444cdc44";

  sciencenewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=20383ba69952483e96ed64c0444cdc44";

  healthnewsApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=20383ba69952483e96ed64c0444cdc44";

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  } 

  technews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl);
  }
  businessnews():Observable<any>
  {
    return this._http.get(this.businessnewsApiUrl);
  } 

  entertainmentnews():Observable<any>
  {
    return this._http.get(this.entertainmentnewsApiUrl);
  }
  sportsnews():Observable<any>
  {
    return this._http.get(this.sportsnewsApiUrl);
  }
  sciencenews():Observable<any>
  {
    return this._http.get(this.sciencenewsApiUrl);
  }
  healthnews():Observable<any>
  {
    return this._http.get(this.healthnewsApiUrl);
  }
}
