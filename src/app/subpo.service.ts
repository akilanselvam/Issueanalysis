import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isubpose } from './subpose';
@Injectable({
  providedIn: 'root'
})
export class SubpoService {
  
  constructor(private http:HttpClient) { }

  getAPIData(id:number):Observable<Isubpose[]>{
    return this.http.get<Isubpose[]>("http://localhost:8080/api/posts/by-subreddit/"+id);
  }
}
