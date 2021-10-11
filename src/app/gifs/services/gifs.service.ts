import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history:string [] = []

  get history(){
    return [...this._history];
  }

  constructor(private http: HttpClient) { }

  searchGifs(query:string){
    query = query.trim().toLocaleLowerCase();
    console.log(query);
    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.slice(0,10);
    }
    console.log(this._history);

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=CGR2SRVWSf6fHR7hFDF366iQp2ZaJkd7&q=GOku&limit=10')
      .subscribe((resp:any)=>{
        console.log(resp.data)
      })
  }

}
