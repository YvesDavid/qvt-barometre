import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
// [NP] Cet intercepteur permet d'ajouter automatiquement le token JWT à toutes les requêtes HTTP
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // [NP] On récupère le token (stocké dans le localStorage après connexion)
    const authToken = localStorage.getItem('token');
    let authReq = request;

    if (authToken) {
      // [NP] Si le token existe, on ajoute le header Authorization à la requête
      authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    // [NP] On renvoie la requête modifiée (ou non) pour qu'elle continue son chemin
    return next.handle(authReq);
  }
}
