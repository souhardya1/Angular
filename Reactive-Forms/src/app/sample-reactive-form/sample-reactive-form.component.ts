import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';
import { BookFormService } from './book-form.service';

@Component({
  selector: 'app-sample-reactive-form',
  templateUrl: './sample-reactive-form.component.html',
  styleUrl: './sample-reactive-form.component.css'
})
export class SampleReactiveFormComponent {

  constructor(private bookServ: BookFormService) {}
  ngOnInit(): void {
    this.initForm();
  }

  prices: any[] = [
    { value: 100, viewValue: '100'},
    { value: 200, viewValue: '200'},
    { value: 300, viewValue: '300'}
  ];

  currency: any[] = [
    { value: 'USD', viewValue: '$'},
    { value: 'INR', viewValue: '₹'},
    { value: 'EURO', viewValue: '€'}
  ];

  addBookForm: FormGroup;

  private initForm(): void {
    this.addBookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      pages: new FormControl(),
      price: new FormGroup({
        currency: new FormControl(),
        value: new FormControl()
      }),
      publishedDate: new FormControl(),
      isPublished: new FormControl(),
    });
  }

  save() {
    if(this.addBookForm.valid) {
      console.log('FormGroup');
      console.log(this.addBookForm);
      console.log('FormGroup Values');
      console.log(this.addBookForm.value);
      this.bookServ.add(this.addBookForm.value);
    }

  }

}
