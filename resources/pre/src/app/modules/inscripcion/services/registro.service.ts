import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiOutResponse } from '../dto/response/ApiOutReponse';
import { InscripcionRequest } from '../dto/request/InscripcionRequest';
import { environment } from 'src/environments/environment';

@Injectable()
export class RegistroService {

  constructor(private http: HttpClient) {
  }

  public registrarInscripcion(req: InscripcionRequest): Observable<ApiOutResponse> {
    return this.http.post<ApiOutResponse>(`${environment.backendUrl}/inscripcion/registrar`, req);
  }
}
