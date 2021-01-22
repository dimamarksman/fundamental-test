import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroupRegister: FormGroup;
  submitted = false;

  errorTextStream: BehaviorSubject<string> = new BehaviorSubject('Error!');

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formGroupRegister = new FormGroup({});
  }

  hasError(): boolean {
    return this.formGroupRegister.invalid && this.submitted;
  }

  onSubmit(): void {
    // stop here if form is invalid
    if (this.formGroupRegister.invalid) {
      this.submitted = true;
      return;
    }

    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' +
        JSON.stringify(this.formGroupRegister.value, null, 4)
    );
  }
}
