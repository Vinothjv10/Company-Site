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
      name: "Insta",
      description: "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family",
    },
    {
      name:"Twitter",
      description:"Twitter is an American microblogging and social networking service on which users post and interact with messages known as twitter"
    },
    {
      name: "Google",
      description: "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family",
    },
    {
      name:"FaceBook",
      description:"Twitter is an American microblogging and social networking service on which users post and interact with messages known as twitter"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
