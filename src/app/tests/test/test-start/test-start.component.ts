import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Test } from '../../test.model';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-test-start',
  templateUrl: './test-start.component.html',
  styleUrls: ['./test-start.component.css']
})
export class TestStartComponent implements OnInit {
  id : number ;
  testQuestions : string[] ; 
  constructor( 
    private tsService : TestService ,
    private router :Router ,
    private route : ActivatedRoute  ) { }

  ngOnInit(): void {
    this.route.params 
        .subscribe (
          (params : Params) => {
              this.id = +params['id'] ;
          }
        )
    this.testQuestions = this.tsService.getTest(this.id).questions ;
  }

  onResult(){
    this.router.navigate(['/tests',this.id,'result']);

  }



}
