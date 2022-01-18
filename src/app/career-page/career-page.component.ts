import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css']
})



export class CareerPageComponent implements OnInit {

  filteredString: string = '';

  items = [
    {
      name: "sfs",
      description: "sdfsf",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
