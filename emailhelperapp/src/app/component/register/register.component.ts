import { Component, OnInit } from '@angular/core';
import { CandidateStatus } from 'src/app/model/enum/candidate-status.enum';
import { AuthService } from '../../service/auth.service';
import { CandidateService } from './../../service/candidate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/service/validation.service';
import { User } from 'src/app/model/user';
import { EmailhelperService } from 'src/app/service/emailhelper.service';
import { EmailDto } from 'src/app/model/emaildto';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    firstName : null,
    lastName : null,
    birthDate : new Date,
    candidateStatus : CandidateStatus.UNPAYED,
    city : null,
    country : null,
    phoneNumber : null
  };
  f: any;
  userForm: any;
  candidateForm: any;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private candidateService: CandidateService, private fb: FormBuilder, private emailHelperService: EmailhelperService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.f = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required,Validators.minLength(8), ValidationService.passwordValidator]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      candidateStatus: [CandidateStatus, [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
    });

    this.userForm = this.fb.group({
      id: [],
      username: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required,Validators.minLength(8), ValidationService.passwordValidator]]
    });
    this.candidateForm = this.fb.group({
      id: [],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: [new Date, [Validators.required]],
      candidateStatus: [CandidateStatus, [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, ValidationService.emailValidator]]
    });
   }
   
   getErrorMessage() {
    return this.form.hasError('required') ? 'Required field' :
      this.form.hasError('email') ? 'Not a valid email' :
        '';
  }
  saveUser() {
    if (this.f.dirty && this.f.valid) {
      this.userForm.patchValue({
        username: this.f.value.username,
        email: this.f.value.email,
        password: this.f.value.password,
      });
      this.candidateForm.patchValue({
        firstName: this.f.value.firstName,
        lastName: this.f.value.lastName,
        birthDate: this.f.value.birthDate,
        candidateStatus: CandidateStatus.CONFIRMED,
        city: this.f.value.city,
        country: this.f.value.country,
        phoneNumber: this.f.value.phoneNumber,
        email: this.f.value.email
      });
      alert(
        `Name: ${this.userForm.value.username} Email: ${this.candidateForm.value.email} Password: ${this.userForm.value.password}`
      );
      this.authService.register(this.userForm.value).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.candidateService.createCandidate(this.candidateForm.value).subscribe(() => {
          
          });
          let email = new EmailDto(this.f.value.email, "Bine ati venit!", "ADMITERE 2021", new Date());
          this.emailHelperService.sendEmail(email).subscribe(()=>{
            
          });
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );

    }
  }

  clearForm() {
    this.f.reset();
}
}