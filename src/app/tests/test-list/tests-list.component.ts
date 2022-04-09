import { Component, OnInit } from '@angular/core';
import { Test } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.css']
})
export class TestsListComponent implements OnInit {
  tests : Test[];
  
  constructor(private tsService: TestService) { }

  ngOnInit(): void {
    this.tests = this.tsService.getTests();

  }

}
