import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticateService } from './service/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    providers: [AuthenticateService] 
})
export class RegisterComponent {
    registrationForm = new FormGroup({
        name: new FormControl('', Validators.compose([
            Validators.minLength(3),
            Validators.maxLength(255),
            Validators.required,
            Validators.pattern('^[a-z A-Z]+$')]
        )),
        lastName: new FormControl('', Validators.compose([
            Validators.minLength(3),
            Validators.maxLength(255),
            Validators.required,
            Validators.pattern('^[a-z A-Z]+$')]
        )),
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
        )),
        password: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]
        ))
    });

    constructor(private authService: AuthenticateService) {}

    registrar() {
        this.authService.registerUser(this.registrationForm.value)
            .then(res => {
                console.log(res);
            }, err => {
                console.log(err);
            })
    }
}