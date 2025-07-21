import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserAuth {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  // public setRoles(roles:[]){
  //   localStorage.setItem('roles',JSON.stringify(roles));
  // }
  //
  // public getRoles():[]{
  //   return JSON.parse(<string>localStorage.getItem('roles'));
  // }
  //
  // public setToken(jwtToken:string){
  //   localStorage.setItem("jwtToken",jwtToken);
  // }
  //
  // public getToken():string{
  //   return <string>localStorage.getItem('jwtToken');
  // }
  //
  // public clear(){
  //   localStorage.clear();
  // }
  // public isLoggedIn(){
  //   return this.getRoles() && this.getToken();
  // }
  public setRoles(roles: []) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('roles', JSON.stringify(roles));
    }
  }

  public getRoles(): [] {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(<string>localStorage.getItem('roles'));
    }
    return [];
  }

  public setToken(jwtToken: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("jwtToken", jwtToken);
    }
  }

  public getToken(): string {
    if (isPlatformBrowser(this.platformId)) {
      return <string>localStorage.getItem('jwtToken');
    }
    return '';
  }
  public clear() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }


}
