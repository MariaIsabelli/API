import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from 'src/app/componentes/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadstro: Cadastro[]
  displayedColumns = ['id', 'usuario', 'senha', 'action', 'nome', 'data', 'telefone'];

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastros => {
      this.cadastros = cadastros
    })
  }

}
