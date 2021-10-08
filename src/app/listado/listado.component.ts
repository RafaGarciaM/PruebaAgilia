import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuarios';
import {listadoService} from '../services/listado.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [listadoService]
})
export class ListadoComponent implements OnInit {

  public usuario: Usuario[] = [];
  
  constructor(private _listadoService: listadoService) {
    
  }
 

  ngOnInit() {
    this._listadoService.getUsuarios().subscribe(
      data => {
        this.usuario=data.data;
        
        console.log(this.usuario);

      },
      error => {
        console.log(error);
      }
      
      
    );

    
  }

}
