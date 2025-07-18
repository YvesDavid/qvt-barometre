import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Api {
  // [NP] Adresse de base de l'API backend (Symfony) — à adapter si le backend change d'environnement
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  // [NOTE perso] Méthode pour récupérer les résultats depuis l'API
  // Elle retourne un Observable de type any (à typer plus tard si besoin)
  getResults(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/results`); // <-- adapte l’endpoint à ton API
  }
}
