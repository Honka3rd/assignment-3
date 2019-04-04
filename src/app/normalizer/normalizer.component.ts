import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normalizer',
  templateUrl: './normalizer.component.html',
  styleUrls: ['./normalizer.component.css']
})
export class NormalizerComponent implements OnInit {
  userInput:string;

  constructor() {
    this.userInput = '';
  }

  ngOnInit() {
  }

}
