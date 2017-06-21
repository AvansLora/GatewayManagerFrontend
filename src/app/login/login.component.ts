import {Component, Input} from '@angular/core';
import {LoginService} from './loginService';
/**
 * Created by gjoosen on 20/06/2017.
 */

@Component({
  templateUrl : 'login.component.html',
  selector: 'app-login'
})

export class LoginComponent {


  protected usernameStr: string;
  protected passwordStr: string;

  constructor(private loginService: LoginService){
    this.usernameStr = 'admin';
    this.passwordStr = 'admin';
  }

  authenticateButtonClicked(event) {
    this.loginService.login(this.usernameStr, this.passwordStr).subscribe(res => {
      this.loginService.token = res['token'];
      this.loginService.loggedIn = true;
    });
  }

  cancelButton(event){
    console.log("ramp!");
  }
}
