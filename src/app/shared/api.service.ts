import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {

   }

  postEmployee(data: any) {
    return this.http.post<any>("http://localhost:8000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
   }
 
 getEmployee(){
  return this.http.get<any>("http://localhost:8000/posts")
    .pipe(map((res: any) => {
      return res;
    }))
 }

 updateEmployee(data :any, id: number){
  return this.http.put<any>("http://localhost:8000/posts/"+id,data)
    .pipe(map((res: any) => {
      return res;
    }))
 }
 deleteEmployee(id: number){
  return this.http.delete('http://localhost:8000/posts/'+id)
  .pipe(map((res: any) => {
    console.log("res", res );
    return res;
  }))

}
}
