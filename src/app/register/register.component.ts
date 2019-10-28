import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    registrationForm = new FormGroup({
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
        )),
        password: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]
        ))});

    registrar() {
        console.log(this.registrationForm);
    }
}