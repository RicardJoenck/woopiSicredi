import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private apiBaseUrl = environment.baseApiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getDragonList() {
    return this.http.get(`${this.apiBaseUrl}/dragon`);
  }
  getDragonDetail(id: number) {
    return this.http.get<Dragon>(`${this.apiBaseUrl}/dragon/${id}`);
  }
  createDragon(dragon: Dragon) {
    return this.http.post<Dragon>(`${this.apiBaseUrl}/dragon`, dragon);
  }
  editDragon(dragon: Dragon) {
    return this.http.put<Dragon>(`${this.apiBaseUrl}/dragon/${dragon.id}`, dragon);
  }
  deleteDragon(id: number) {
    return this.http.delete<Dragon>(`${this.apiBaseUrl}/dragon/${id}`);
  }
}

export interface Dragon {
  id?: number;
  createdAt: string;
  name: string;
  type: string;
  histories: string[];
}
