import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environment';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

const { apiUrl } = environment;
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.url.startsWith(API)) {
        req = req.clone({
            url: req.url.replace(API, apiUrl),
            withCredentials: true,
        });
    }

    const router = inject(Router);

    return next(req).pipe(
        catchError((err) => {
          return [err];
        })
    );
}
