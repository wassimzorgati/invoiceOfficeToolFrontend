
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from "@app/services/account.service";
import { AlertService } from "@app/services/alert.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  public readonly firstNameControl: FormControl;
  public readonly lastNameControl: FormControl;
  public readonly userNameControl: FormControl;
  public readonly passwordControl: FormControl;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) {
    this.firstNameControl = new FormControl(
      '', Validators.required
    );
    this.lastNameControl = new FormControl(
      '', Validators.required
    );
    this.userNameControl = new FormControl(
      '', Validators.required
    );

    this.passwordControl = new FormControl(
      '', Validators.required
    );
    this.form = this.formBuilder.group({
      firstname: this.firstNameControl,
      lastname: this.lastNameControl,
      username: this.userNameControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.userNameControl.value, this.passwordControl.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}

