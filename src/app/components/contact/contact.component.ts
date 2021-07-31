import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { ApiService } from 'src/app/core/services/api.service';
import { ContactModule } from 'src/app/modules/contact.module';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  model = new ContactModule();
  submitted = false;
  error!: {};

 formGroupContact = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(35)
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  /*customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label!.toUpperCase()} IS DEFINITELY REQUIRED!`
    }, {
      error: 'pattern',
      format: (label, error) => `${label!.toUpperCase()} EMAIL IS INVALID!`
    }
  ];*/

  private _success = new Subject<string>();
  private _danger = new Subject<string>();
  successMessage = '';
  notSuccessMessage = '';
  @ViewChild('selfClosingAlertNotSent', {static: false}) selfClosingAlertNotSent!: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    // message email gesendet
    this.emailGesendet();
    this.emailNotSent();
  }

  onSubmit(): any {
    if (this.formGroupContact.valid) {
      this.submitted = false;
      return this.apiService.contactForm(this.formGroupContact.value).subscribe(
        data => { (data['email'] === 'gesendet' ? this.changeSuccessMessage() : void 0) },
        error => this.error = error
      );
    } else {
      return console.log('erorr');
    }
  }


  onReset(): any {
    return this.formGroupContact.reset();
  }

  gotoHome(): any {
    return this.router.navigate(['/']);
  }

  // message email gesendet
  private emailGesendet(): void {
    this._success.subscribe((message: string) => this.successMessage = message);
    this._success.pipe(debounceTime(8000)).subscribe(() => {
       if (this.selfClosingAlert) {
         this.selfClosingAlert.close();
       }
    });
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()}`);
    this.onReset();
  }

  // message nicht gesendet
  private emailNotSent(): void {
    this._danger.subscribe((message: string) => this.notSuccessMessage = message);
    this._danger.pipe(debounceTime(8000)).subscribe(() => {
      if (this.selfClosingAlertNotSent) {
        this.selfClosingAlertNotSent.close();
      }
    });
  }

  public changeDangerMessage() {
    this._danger.next(`${new Date()}`);
    this.onReset();
  }



} // end class
