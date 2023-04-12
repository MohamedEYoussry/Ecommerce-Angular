import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAllCategories():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.APIBaseURL}/categories`)

  }
}
