import { Component, OnInit } from '@angular/core';
import { Portofolio } from '../../services/portofolio.model';
import { PortofolioService } from '../../services/portofolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentProjects: Portofolio[];
  constructor(private portfolioSvc: PortofolioService) { }

  ngOnInit() {
    this.portfolioSvc.getPortofolios().subscribe(data => {
      this.recentProjects = data.splice(0, 7);
    });
  }

}
