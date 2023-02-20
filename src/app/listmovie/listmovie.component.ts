import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { movieclass } from '../movies';
@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})

export class ListmovieComponent implements OnInit  {
  Service: MovieService;
  
  
  constructor(Service: MovieService, public router: Router){
    this.Service = Service;
  } 

  movies:movieclass[]=[];
  ngOnInit(): void {
    this.Service.fetchmovies();
    this.movies=this.Service.getmovie();
    
    }
   


    
  

  delete(mid:number){
    this.Service.delete(mid);
  }

  update(mid:number){
    this.router.navigate(['update-movie']);
  }


}

