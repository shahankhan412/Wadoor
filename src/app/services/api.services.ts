import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ComponentService } from './component.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  public requestOptions: any;

  constructor(public http: HttpClient, private componentService: ComponentService) { }

  // Auth Apis

  public login(data: any) {
    const url = environment.apiBaseUrl + 'login';
    const body = { phone_number: data.phone_number};
    return this.http.post(url, body).pipe(
      map(
        (response) => {
          return response;
        },
      ),
      retry(0),
      catchError(
        (error: HttpErrorResponse) => {
          throw this.handleError(error);
        },
      ),
    );
  }

  public signup(data: any) {
    const url = environment.apiBaseUrl + 'register';
    const body = { name: data.name, email: data.email, phone_number: data.phone_number};
    return this.http.post(url, body).pipe(
      map(
        (response) => {
          return response;
        },
      ),
      retry(0),
      catchError(
        (error: HttpErrorResponse) => {
          throw this.handleError(error);
        },
      ),
    );
  }

  public otp(code: any, number: any) {
    const url = environment.apiBaseUrl + 'verify';
    const body = { verification_code: code, phone_number: number};
    return this.http.post(url, body).pipe(
      map(
        (response) => {
          return response;
        },
      ),
      retry(0),
      catchError(
        (error: HttpErrorResponse) => {
          throw this.handleError(error);
        },
      ),
    );
  }

  public handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) { } else if (error.status === 404) {
      this.componentService.getToast('Something went wrong.', 3000, 'top', 'danger').then(
        (toast) => {
          toast.present();
        },
      );
    } else if (error.status === 200) {
      this.componentService.getToast('Something went wrong.', 3000, 'top', 'danger').then(
        (toast) => {
          toast.present();
        },
      );
    }
  }
}
