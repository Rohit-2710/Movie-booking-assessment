import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieclass } from './movies';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  url="./assets/movie.json";
  http: HttpClient;
  movies:movieclass[]=[];
  constructor(http: HttpClient) {
    this.http = http;
  }

  fetched:Boolean = false;
  fetchmovies(){
    this.http.get(this.url).subscribe(data=>{
      if(!this.fetched){
        this.convert(data);
        this.fetched=true;
      }
    });
  }
  getmovie():movieclass[]{
    return this.movies;
  }

  convert(data:any){
    for(let o of data){
      let e= new movieclass(o.movieId, o.movieName, o.movieDate, o.numberTickets);
      this.movies.push(e);

    }
  }
  add(e:movieclass){

    this.movies.push(e);
  }

  delete(mid:number){
    let foundIndex:number=-1;
    for(let i=0;i<this.movies.length;i++){
      if(this.movies[i].movieId==mid){
        foundIndex=i;
        break;
      } 
    }
    this.movies.splice(foundIndex,1);
  }

  update(mid:any){
    for(let i=0;i<this.movies.length;i++){
      if(this.movies[i].movieId==mid){
        this.movies.splice(i,1);
        this.movies.push(mid);
        break;
      }
    }
  }

}
  
  

 
