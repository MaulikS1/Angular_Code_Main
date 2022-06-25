import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from "ng-angular-popup";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  showSpinner = false;

  constructor(private authService: AuthService, private router: Router, private toast: NgToastService) {}

  ngOnInit(): void {
    this.initializeform();
  }

  initializeform() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new UntypedFormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.showSpinner = true;
      setTimeout(()=>{
        this.showSpinner = false;
      },5000);
      this.authService
        .login(this.loginForm.value)
        .subscribe((result: { message: any; success: any }) => {
          console.log(result.message);
          if (result.success) {
            this.router.navigate(['/users']);
          } else {
            this.showSpinner = false;
            this.openError(result.message);
          }
        });
    }
  }

  openError(msg:string){
    this.toast.error({detail: msg, summary: 'Please enter correct email and password.', position:'tr', sticky: true, duration: 5000});
  }


}
