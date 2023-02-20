import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { movieclass } from '../movies';
import { Router } from '@angular/router';


import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit  {
  Service:MovieService;

  constructor(Service:MovieService,public router:Router) { 
    this.Service=Service;
  }
  movielist=new FormGroup({
    movieid:new FormControl(0,Validators.compose([Validators.required,Validators.min(1), Validators.max(300)])),
    moviename:new FormControl('',Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,20}$")])),
    movieBookingDate:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/)])),
    noOfTickets:new FormControl(0,Validators.compose([Validators.required, Validators.min(1), Validators.max(15)]))
  })

  ngOnInit(): void {
  }
  update(e:any){
      this.Service.update(e);
      this.router.navigate(['list-movie']);
    }


}
