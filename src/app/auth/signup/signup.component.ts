import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from '../../shared/consts/defines';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'bpu-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    
    this.initRegisterForm()
  }
  initRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  signUp() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(() => {
        if (localStorage.getItem('user')) {
          this.authService.isLogedin = true;
          this.router.navigate([config.user.allUsers.route])
        }
      })
    }
  }
  gotoLogIn() {
    this.router.navigate([config.auth.login.route])
  }

}
