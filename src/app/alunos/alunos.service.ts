import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from './aluno.model';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  removerAlunto(id:any):Observable<any>{
    return this.http.delete(environment.apiURL.concat(id))
  }

  atualizarAluno(id:any, aluno: AlunoModel):Observable<any>{
    return this.http.put(environment.apiURL.concat(id),aluno); 
  }
  
  listarAlunos():Observable<any>{
    return this.http.get(environment.apiURL);
  }

  cadastrarAluno(aluno: AlunoModel):Observable<any>{
    return this.http.post(environment.apiURL,aluno);
  }

  

}
