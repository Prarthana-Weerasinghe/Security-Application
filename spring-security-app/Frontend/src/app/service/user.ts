import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserAuth} from './user-auth';
import {UserSignup} from '../dto/UserSignup';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
  BASE_URL="http://localhost:8085";

  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(
    private httpClient:HttpClient,
    private userAuth:UserAuth
  ) { }

  public login(loginData:any){
    return this.httpClient.post(this.BASE_URL+"/authentication",loginData,{headers:this.requestHeader});

  }
  public registerNewUser(signup:UserSignup):Observable<UserSignup>{
  return this.httpClient.post<UserSignup> (this.BASE_URL+"/user/register-new-user",signup,{headers:this.requestHeader});
  }

  public roleEqual(allowRoles:any):boolean{
    let isMatch=false;
    const userRoles : any = this.userAuth.getRoles();
    if(userRoles != null && userRoles){
      for(let i =0; i<userRoles.length; i++){
        for (let j=0; j<allowRoles.length;j++){
          if(userRoles[i].roleName === allowRoles[j]){
            isMatch=true;
            return isMatch;
          }else{
            return isMatch;
          }
        }

      }
    }
    return isMatch;
  }
}
