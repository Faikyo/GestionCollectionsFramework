import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {apiResponse, CollectionWithId} from "../../interfaces/api";
import {Collection} from "../../interfaces/collection/collection";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private apiUrl = 'http://localhost:8080/api/collections';

  constructor(private http: HttpClient) { }


  public all(): Observable<Array<CollectionWithId>> {
    return this.http.get<apiResponse<CollectionWithId>>(this.apiUrl,
      { observe: 'body', responseType: 'json' })
      .pipe(tap(console.log), map((data) => data['hydra:member']))
  }


  public modifyCollection(collection: CollectionWithId): Observable<boolean> {
    return this.http.put(this.apiUrl+"/"+collection.id.toString(),
      collection,
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===200))
  }

  public addCollection(collection: Collection): Observable<boolean> {
    return this.http.post(this.apiUrl,
      collection,
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===200))
  }

  public collectionFromId(id: number): Observable<CollectionWithId> {
    return this.http.get<CollectionWithId>(this.apiUrl+"/"+id.toString(),
      {observe: 'body', responseType: 'json'})
  }
}
