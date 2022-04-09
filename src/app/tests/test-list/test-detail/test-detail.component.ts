import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../test.model';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
 @Input() test : Test;
 @Input() index: number;

  constructor() { }
  ngOnInit(): void {
  }
}
