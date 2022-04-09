import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test:Test ;
  id : number ;
  constructor( private tsService : TestService ,
              private route : ActivatedRoute ,
              private router : Router
              ) { 
              }
  ngOnInit(): void {
    this.route.params
        .subscribe(
          (params :Params) => {
            this.id = +params['id'];
            this.test = this.tsService.getTest(this.id)
          }
        )
  }

  onStart(){
    this.router.navigate(['start'], {relativeTo : this.route})
  }



}
