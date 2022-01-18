import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  registerForm: any;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "phonenumber": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "company": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      "help": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),

    });

  }
  submitData() {
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      alert(`Thank You ${this.registerForm.value.name}`);
      this.registerForm.reset();
    }

  }

  get name() { return this.registerForm.get('name'); }
  get company() { return this.registerForm.get('company'); }
  get email() { return this.registerForm.get('email'); }
  get phonenumber() { return this.registerForm.get('phonenumber'); }
  get help() { return this.registerForm.get('help') }

}

