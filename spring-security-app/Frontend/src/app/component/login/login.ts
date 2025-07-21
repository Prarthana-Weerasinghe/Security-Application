import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {User} from '../../service/user';
import {UserAuth} from '../../service/user-auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login  implements OnInit{
  constructor(
    private user:User,
    private userAuth:UserAuth,
    private router:Router
   ) {
  }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    this.user.login(loginForm.value).subscribe(
      (response:any)=> {
        this.userAuth.setRoles(response.client.role);
        this.userAuth.setToken(response.jwtToken);
        console.log(response)
        const role = response?.client?.role?.[0]?.roleName;
        console.log('Extracted role:', role);
        if(role === 'Admin'){
           this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/user']);
        }

      },
      (error)=>{
        console.log(error);
      });
  }
}
