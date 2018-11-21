import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dbconnection } from '../Models/dbconnection';

@Injectable({
  providedIn: 'root'
})
export class DbConectionService {

  BASE_URL:String = "http://localhost:3000/"

  constructor(private _http:HttpClient) { }

  connect(data:any){
    return this._http.post(this.BASE_URL+"connect",data)
  }

  generateQuery(data:any){
    return this._http.post(this.BASE_URL+"generateProcedure",data)
  }

  executeQuery(data:any){
    return this._http.post(this.BASE_URL+"executeQuery",data)
  }

  generateProcedures(procedure){
    return this._http.post(this.BASE_URL+"createProcedure",{"procedure":procedure})
  }

  getConnections(){
    return this._http.get(this.BASE_URL+"getConnections")
  }

  closeAllConnections(){
    return this._http.get(this.BASE_URL+"closeAllConnections")
  }
  getSchemas(id){
    return this._http.get(this.BASE_URL+"getSchemas/"+id)
  }
  getTables(id,schema){
    return this._http.get(this.BASE_URL+"getTables/"+id+"/"+schema)
  }
  getTablePrivileges(id,schema,table){
    return this._http.get(this.BASE_URL+"getTablePrivileges/"+id+"/"+schema+"/"+table)
  }
  getTableColumns(id,schema,table){
    return this._http.get(this.BASE_URL+"getColumns/"+id+"/"+schema+"/"+table)
  }
  getTableColumnsPrivileges(id,schema,table,column){
    return this._http.get(this.BASE_URL+"getColumnPrivileges/"+id+"/"+schema+"/"+table+"/"+column)
  }
  getUsers(id){
    return this._http.get(this.BASE_URL+"getUsers/"+id)
  }

}
  