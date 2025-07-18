import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { Api } from '../../services/api';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-multiChart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './multiChart.html',
  styleUrls: ['./multiChart.scss'],
})
export class MultiChart implements OnInit {
  // [NP] On récupère les deux graphiques (bar et pie) pour pouvoir les mettre à jour séparément
  @ViewChild('barChartRef', { static: false, read: BaseChartDirective }) barChart?: BaseChartDirective;
  @ViewChild('pieChartRef', { static: false, read: BaseChartDirective }) pieChart?: BaseChartDirective;

  public loading = true;

  public chartOptions: ChartOptions = { responsive: true };

  // [NOTE perso] Données initiales pour les graphiques
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData = {
    labels: ['Chargement...'],
    datasets: [{ data: [0], label: 'Chargement' }],
  };

  public barChartType: ChartType = 'bar';
  public barChartData: ChartData = {
    labels: ['A', 'B', 'C'],
    datasets: [{ data: [5, 10, 15], label: 'Statique' }],
  };

  constructor(private api: Api) {}

  ngOnInit(): void {
    // [NOTE perso] Appel des résultats dynamiques dès que le composant est prêt
    this.api
      .getResults()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => {
          console.log('Résultats API =>', data);

          if (data?.labels && data?.values) {
            this.pieChartData = {
              labels: data.labels,
              datasets: [{ data: data.values, label: 'Graphique API' }],
            };

            // [NOTE perso] Mise à jour manuelle des 2 graphiques
            setTimeout(() => {
              this.pieChart?.update();
              this.barChart?.update();
            }, 0);
          }
        },
        error: (err) => {
          console.error('Erreur lors du chargement des données', err);
        },
      });
  }
}
