import { Component, OnInit, OnDestroy } from '@angular/core';
//Clases
import{Dbconnection} from "../../Models/dbconnection"


//Services 
import { DbConectionService } from '../../Services/db-conection.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private _query:String;
  private _connections:Array<number>;
  private _list=new Array
  private _page=0
  private _actualDB:number=0
  private _queryError:string = '';

  objectKeys = Object.keys;

  constructor(private _dbService:DbConectionService, private _router:Router) {
    this.prepareAll()
   }
   prepareAll(){
    this._dbService.closeAllConnections().subscribe(res=>{
      //console.log(res.code+": "+res.data)
    });
    //this.reconnectDB();
    this._connections=[];
    this._query='';
   }

  dbConnection:Dbconnection = new Dbconnection

  errorMessage:String = "";



  conected:boolean = false;

  ngOnInit() {

  }
  ngOnDestroy(){
    this._dbService.closeAllConnections().subscribe(res=>{
      //console.log(res.code+": "+res.data)
    });
  }

  onSubmitConnection(){
    console.log(this.dbConnection);
    this._dbService.connect({config:this.dbConnection})
    .subscribe((result:any)=>{
      console.log(result.code)
      if(result.code == 200){
        console.log("funciono")
        this.conected = true;
        this._dbService.getUsers(this._actualDB).subscribe((res:any)=>{
          console.log(res)
        })
        this.errorMessage = ""
        //this.addServerTree()
      }
      else{
          console.log("no funciono")
          this.errorMessage = result.data
          this.conected = false;
      }
    })
  }
  

  checkConection(){
    if(this.conected){
    console.log("hola")
    //this.addServerTree()
    //this._router.navigate(["dbQuery"])
    }
    else
    console.log("no conectado")
  }

  onSubmitQuery(){
    //console.log(this.dbConnection);
    this._queryError = "";
    this._dbService.executeQuery({query:this._query,id:this._actualDB})
    .subscribe((result:any)=>{
      console.log(result.code)
      if(result.code == 200){
        console.log(result.data.rows)
        this._list=new Array
        result.data.rows.forEach(element => {
          this._list.push(element)
        });
      }
      else{
        this._list = []
        this._queryError = result.data;
        console.log(result.data)
      }
    })
  }
  onFilterChange(value: string) {
    console.log('filter:', value);
  }

  
}
