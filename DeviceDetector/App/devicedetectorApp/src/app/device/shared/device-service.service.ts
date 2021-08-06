import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devicemodel } from './devicemodel.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {
  formData: Devicemodel = new Devicemodel();
  readonly baseClientURL = 'https://localhost:44383/api/ClientDevice';
  readonly baseServerURL = 'https://localhost:44383/api/ServerDevice';
  list: Devicemodel[];
  constructor(private http: HttpClient) { }

  postDeviceDetail() {
    return this.http.post(this.baseClientURL, this.formData);
  }

  refreshList() {
    this.http.get(this.baseClientURL)
      .toPromise()
      .then(res => this.list = res as Devicemodel[]);
  }

  getDeviceInfo(id: string) {    
    return this.http.get(encodeURI(`${this.baseServerURL}?id=${id}`));
  }
} 
