import { Injectable } from '@angular/core';
import {CadastroService} from './CadastroService;
import {Router} from 'angular/Router';
import {cadastro} from './cadastro';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro-create',
  templateURL: './cadastro-create.componente.html',
  styleUrls: ['./cadastro-create.component.csss']
})

@Injectable({
  providedIn: 'root'
})
export class CadastroService implements Oninit {
  baseUrl = "http://localrost:3001/login"

  cadastro: cadastro ={
    usuario: '',
    senha:'',
  }

  constructor(private snackBar: MatSnackBar, private http: httpClient) {
   }
   showMessege(msg: string):void{
     this.snackBar.open(msg, 'x' ,{
       duration:6000,
       verticalPosition: "bottom"
     });
   }

   create(cadastro: Cadastro): Observable<Cadastro>{
     return this.http.post<cadastro>(this.baseUrl,cadastro)
   }

  ngOnInit(): void{
    
  }
}
createCadastro(): void{
  this.CadastroService.create(this.cadastro).subscribe(() =>{
    this.CadastroService.showMessege('Usuário Cadastrado')
  })
}
cancelarCadastro(): void {
  this.Router.navigate([''])
}
tabelasCadastro(): void{
  this.Router.navigate(['/cadastro/tabela'])
}
}
