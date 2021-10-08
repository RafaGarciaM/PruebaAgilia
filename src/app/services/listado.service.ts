import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable()

export class listadoService{
   
    public url : String;
    public borrar=true;

    constructor(private _http: HttpClient){
        this.url= "https://reqres.in/api/users?page="
        
    }
    mostrarListado(){
        return 'hola'
    }

    getUsuarios():Observable<any>{
        return this._http.get(this.url+"2");
    }
    
}