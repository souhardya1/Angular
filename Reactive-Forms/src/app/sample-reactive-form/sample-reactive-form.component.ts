import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookFormService } from './book-form.service';

@Component({
  selector: 'app-sample-reactive-form',
  templateUrl: './sample-reactive-form.component.html',
  styleUrl: './sample-reactive-form.component.css'
})
export class SampleReactiveFormComponent {

  constructor(private bookServ: BookFormService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    const titleControl = this.addBookForm.get('title');
    const authorControl = this.addBookForm.get('author');
    const formatTypeControl = this.addBookForm.get('formatType');


    titleControl?.valueChanges.pipe().subscribe(i => {
      this.validateControl(titleControl as FormControl,'title');
    });

    authorControl?.valueChanges.pipe().subscribe(i => {
      this.validateControl(authorControl as FormControl,'author');
    });

    formatTypeControl?.valueChanges.pipe().subscribe(i => {
      console.log(formatTypeControl.value)
      this.formatTypeChanged(formatTypeControl.value);
    });
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

  titleErrorMessage: string;
  authorErrorMessage: string;
  pdfErrorMessage:string;
  docErrorMessage:string;

  addBookForm: FormGroup;

  private initForm(): void {
    this.addBookForm = this.fb.group({
      title: ['no title',[Validators.required,Validators.minLength(5)]],
      author: ['Souhardya',Validators.required],
      pages: [0,Validators.required],
      price: this.fb.group({
        currency:['USD',Validators.required],
        value:['100',Validators.required]
      }),
      publishedDate: ['',Validators.required],
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat:''
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

  private validateControl(control: FormControl, controlName: string): void {
    this.titleErrorMessage = '';
    this.authorErrorMessage = '';
    if(control.errors && (control.touched || control.dirty) ) {
      if (control.errors?.required) {
        if(controlName == 'title'){
          this.titleErrorMessage = "This field is required";
        }
        if(controlName == 'author') {
          this.authorErrorMessage = "This field is required";
        }
      }
      else if(control.errors?.minlength){
        this.titleErrorMessage = "Minimum Length is "+control.errors?.minlength?.requiredLength;
      }
    }
  }

  private formatTypeChanged(type:string){
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if(type === 'pdf'){
      this.pdfErrorMessage = "this field is required";
      this.docErrorMessage = '';
      pdfControl?.addValidators(Validators.required);
      docControl?.clearValidators();
    }
    else{
      if(type === 'doc'){
        this.docErrorMessage = "this field is required";
        this.pdfErrorMessage = '';
        docControl?.addValidators(Validators.required);
        pdfControl?.clearValidators();
      }
    }
  }
}
