import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "http://localhost:3000/categories";
  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http
      .get<Category[]>(this.apiUrl)
  }
}
