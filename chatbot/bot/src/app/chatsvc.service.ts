

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsvcService {

  private detailurl='http://3.139.153.89:3000/details';
  private baseurl='http://3.139.153.89:3000/event';
  private menuurl='http://3.139.153.89:3000/menu';
  


  constructor(private http:HttpClient) { }

  getMassage():Observable<any>{
    return this.http.get(`${this.baseurl}`);//api response transaction = observable->helps in easily transferring data
  }

  getdetails(id:string):Observable<any>{
    return this.http.get(`${this.detailurl}/${id}`);
  }

 getQuestion(id:string):Observable<any>{
return this.http.get(`${this.baseurl}/${id}`);
 }

 getmenu(id:string):Observable<any>{
  return this.http.get(`${this.menuurl}/${id}`);
   }




  getanswer(x:string):Observable<any>{
    return this.http.get(`${this.baseurl}/${x}`);
  }
  putdetails(name:string,address:string,phonenumber:string,id:string):Observable<any>{
    const value ={
      name : name,
      address:address,
      phonenumber:phonenumber,
      id : id,
     
    }
    return this.http.post(`${this.detailurl}`,value);
  }
}
