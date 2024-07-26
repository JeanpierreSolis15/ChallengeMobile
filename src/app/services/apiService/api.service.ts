import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { Http } from '@capacitor-community/http';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.marvelBaseUrl;
  private publicKey: string = environment.marvelPublicKey;
  private privateKey: string = environment.marvelPrivateKey;
  private ts: string = environment.marvelTs;
  private hash: string = CryptoJS.MD5(
    this.ts + this.privateKey + this.publicKey
  ).toString();

  constructor(private http: HttpClient, private platform: Platform) {}

  getCreators(): Observable<any> {
    if (this.platform.is('hybrid')) {
      return from(this.getCreatorsNative());
    } else {
      return this.getCreatorsWeb();
    }
  }

  private getCreatorsWeb(): Observable<any> {
    let params = new HttpParams()
      .set('ts', this.ts)
      .set('apikey', this.publicKey)
      .set('hash', this.hash)
      .set('limit', '20');

    return this.http.get(this.baseUrl, { params });
  }

  private async getCreatorsNative(): Promise<any> {
    const params = {
      ts: this.ts,
      apikey: this.publicKey,
      hash: this.hash,
      limit: '20',
    };

    const options = {
      url: this.baseUrl,
      params: params,
    };

    const response = await Http.get(options);
    return response.data;
  }

  getCreatorById(id: string): Observable<any> {
    if (this.platform.is('hybrid')) {
      return from(this.getCreatorByIdNative(id));
    } else {
      return this.getCreatorByIdWeb(id);
    }
  }

  private getCreatorByIdWeb(id: string): Observable<any> {
    let params = new HttpParams()
      .set('ts', this.ts)
      .set('apikey', this.publicKey)
      .set('hash', this.hash);

    return this.http.get(`${this.baseUrl}/${id}`, { params });
  }

  private async getCreatorByIdNative(id: string): Promise<any> {
    const params = {
      ts: this.ts,
      apikey: this.publicKey,
      hash: this.hash,
    };

    const options = {
      url: `${this.baseUrl}/${id}`,
      params: params,
    };

    const response = await Http.get(options);
    return response.data;
  }
}
