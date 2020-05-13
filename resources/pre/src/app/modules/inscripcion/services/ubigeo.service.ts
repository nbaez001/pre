import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiOutResponse } from '../dto/response/ApiOutReponse';
import { environment } from 'src/environments/environment';
import { ProvinciaRequest } from '../dto/request/ProvinciaRequest';
import { DistritoRequest } from '../dto/request/DistritoRequest';

@Injectable()
export class UbigeoService {

  constructor(private http: HttpClient) {
  }

  public listarDepartamento(): Observable<ApiOutResponse> {
    return this.http.post<ApiOutResponse>(`${environment.backendUrl}/ubigeo/listarDepartamento`, {});
  }

  public listarProvincia(req: ProvinciaRequest): Observable<ApiOutResponse> {
    return this.http.post<ApiOutResponse>(`${environment.backendUrl}/ubigeo/listarProvincia`, req);
  }

  public listarDistrito(req: DistritoRequest): Observable<ApiOutResponse> {
    return this.http.post<ApiOutResponse>(`${environment.backendUrl}/ubigeo/listarDistrito`, req);
  }

}
