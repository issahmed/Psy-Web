import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {
  id : number ;
  testResult : string ; 
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
    this.testResult = this.tsService.getTest(this.id).result ;
  }
  // calcul de points 
  // afficher emoji selon le score 
  // proposition de visitez psy au cas graves (publicité payante pour les psy )

}
