import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { BookFormService } from './book-form.service';
import { title } from 'process';

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
      title: new FormControl(null,Validators.required),
      author: new FormControl(null,Validators.required),
      pages: new FormControl(null,Validators.required),
      price: new FormGroup({
        currency: new FormControl(null,Validators.required),
        value: new FormControl(null,Validators.required)
      }),
      publishedDate: new FormControl(null,Validators.required),
      isPublished: new FormControl(false),
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

  initSingleValues() {
    this.addBookForm.patchValue({
      title: 'Good book'
    });
  }

  initAllValues() {
    this.addBookForm.setValue({
      title: 'Better book',
      author: 'Souhardya',
      pages: 100,
      price: {currency:'USD', value:500},
      publishedDate: '2022-08-19',
      isPublished: true
    });
  }
}
