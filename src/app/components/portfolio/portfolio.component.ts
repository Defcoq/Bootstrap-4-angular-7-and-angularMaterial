import { Component, OnInit } from '@angular/core';
import { PortofolioService } from 'src/app/services/portofolio.service';
import { Portofolio } from 'src/app/services/portofolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'all' | 'Angular' | 'React' | 'Vue' = 'all';
  portfolios: Portofolio[];

  constructor(private portofoglioSvc: PortofolioService) {
    this.selectedType = 'all';
   }

  ngOnInit() {
    this.portofoglioSvc.getPortofolios().subscribe(data => {
      this.portfolios = data;
    });
  }

}
