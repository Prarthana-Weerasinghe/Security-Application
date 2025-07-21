import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserSignup} from '../../dto/UserSignup';
import {FormsModule} from '@angular/forms';
import {User} from '../../service/user';
import {ToastrService} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    MatSnackBarModule,

  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup implements OnInit{

  userSignup :UserSignup ={
    username:'',
    userFirstName:'',
    userLastName:'',
    userPassword: '',
    userRole:'User'
  }
  constructor(
    private user:User,
    private router:Router,
     private toastr:ToastrService,
     private snackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
  }
  register(){
    console.log(this.userSignup)
    this.user.registerNewUser(this.userSignup).subscribe(
      (response)=>{
        //this.toastr.success('User added successfully','Success')
        this.snackBar.open('User Added Successfully!', 'Close', {
          duration: 3000,
          panelClass:['snack-success']
        });
        this.router.navigate(['/login']);
        console.log('Added successfully')
      },
      (error) => {
         //this.toastr.error('Error registering user','Error')
        this.snackBar.open('Signin Failed!', 'Close', {
          duration: 3000,
          panelClass:['snack-error']
        });
         console.log('Not success ')
      }
    )
  }


}
