import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portofolio } from './portofolio.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PortofolioService {

  constructor(private httpClient: HttpClient) { }

  getPortofolios(): Observable<Portofolio[]>{
    return this.httpClient.get<Portofolio[]>(environment.apiurl);
  }
}
