import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { Api } from '../../services/api';
import { NgIf } from '@angular/common';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [BaseChartDirective, NgIf],
  templateUrl: './results.html',
  styleUrl: './results.scss'
})
export class Results implements OnInit {
  // [NP] Je récupère ici une référence directe au pie chart via ViewChild
  //read: BaseChartDirective indique à Angular de récupérer la directive BaseChartDirective (et non l’élément <canvas> brut). Sinon, tu obtiendrais un HTMLElement sans .update().
  @ViewChild('pieChartRef', { static: false, read: BaseChartDirective }) pieChart?: BaseChartDirective; // On ajoute read: BaseChartDirective

  public loadingAPI = true;
  public chartOptions: ChartOptions = { responsive: true };

  // [NOTE perso] Graphe de test (statique) pour vérifier que le chart fonctionne
  public barChartType: ChartType = 'bar';
  public barChartDataFictif: ChartData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      { data: [10, 20, 15, 7], label: 'Fictif Bar' }
    ]
  };

  // [NOTE perso] Graphique qui va recevoir les vraies données API
  public pieChartType: ChartType = 'pie';
  public pieChartDataAPI: ChartData = {
    labels: ['Chargement...'],
    datasets: [
      { data: [0], label: 'Chargement' }
    ]
  };

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadingAPI = true;
    
    // [NOTE perso] Appel API pour récupérer les données du backend
    this.api.getResults()
      .pipe(finalize(() => {
        this.loadingAPI = false;

        // [NOTE perso] Important : attendre que Angular réaffiche le canvas avant d'agir
        setTimeout(() => {
          this.cdr.detectChanges(); //  permet à Angular de détecter les changement et force à recalculer le DOM
          this.pieChart?.update();  //  Met à jour le chart une fois visible
        }, 0);
      }))
      .subscribe({
        next: (data) => {
          console.log('data API =>', data);

          // [NOTE perso] On vérifie que les données sont bien structurées
          if (data?.labels && data?.values) {
            this.pieChartDataAPI = {
              labels: data.labels,
              datasets: [
                { data: data.values, label: 'Résultats API' }
              ]
            };
          } else {
            this.pieChartDataAPI = {
              labels: ['Aucune donnée'],
              datasets: [{ data: [0], label: 'Réponse vide' }]
            };
          }
        },
        error: (err) => {         
          // [NOTE perso] Gestion des erreurs si l'API ne répond pas ou plante          
          this.pieChartDataAPI = {
            labels: ['Erreur'],
            datasets: [{ data: [0], label: 'API KO' }]
          };
          console.error('Erreur API', err);
        }
      });
  }
}
