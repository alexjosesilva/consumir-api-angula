import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import {AlunosService} from './alunos.service';
import { AlunoModel } from './aluno.model';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  aluno: AlunoModel =  new AlunoModel();
  alunos_array: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { 
    this.listaAlunos();
  }

  ngOnInit(): void {
  }
  
  atualizarAluno(id: number){
    console.log("Atualizar");

    this.alunosService.atualizarAluno(id,this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listaAlunos();
      },err =>{
        console.log("Erro ao Atualizar aluno", err);
      })
  }

  removerAluno(id: number){
    console.log("Remover");

    this.alunosService.removerAlunto(id).subscribe(alunos => {
      this.aluno = new AlunoModel();
      this.listaAlunos();
    },err =>{
      console.log("Erro ao Atualizar aluno", err);
    })
  }

  cadastrarAluno(){
    console.log("Cadastrar", this.aluno);

    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno => {
    this.aluno = new AlunoModel();
    this.listaAlunos();
    },err =>{
      console.log("Erro ao cadastrar aluno", err);
    })
    
  }

  listaAlunos(){
     console.log("Listar");
     
     this.alunosService.listarAlunos().subscribe(alunos =>{
      this.alunos_array = alunos;
    }, err => {
        console.log('Erro ao lista alunos', err);
    })
  }

}
