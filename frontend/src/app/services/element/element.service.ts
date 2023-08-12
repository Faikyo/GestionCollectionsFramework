import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {apiResponse, CollectionWithId, ElementResponse, ElementWithId} from "../../interfaces/api";
import {Collection} from "../../interfaces/collection/collection";
import {Element} from "../../interfaces/element/element";

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private apiUrl = 'http://localhost:8080/api/elements';

  constructor(private http: HttpClient) { }


  public allElement(): Observable<Array<ElementWithId>> {
    return this.http.get<apiResponse<ElementWithId>>(this.apiUrl,
      { observe: 'body', responseType: 'json' })
      .pipe(tap(console.log), map((data) => data['hydra:member']))
  }


  public modifyElement(element: ElementWithId): Observable<boolean> {
    return this.http.put(this.apiUrl+"/"+element.id.toString(),
      element,
      {observe: 'response', responseType: 'json'})
      .pipe(map((response)=>response.status===200))
  }

  public addElement(element: Element): Observable<boolean> {
    return this.http.post<ElementResponse>(this.apiUrl,
      this.elementToElementResponse(element),
      { observe: 'response', responseType: 'json' })
      .pipe(tap(console.log), map((response) => response.status === 201))
  }

  public elementFromId(id: number): Observable<ElementWithId> {
    return this.http.get<ElementWithId>(this.apiUrl+"/"+id.toString(),
      {observe: 'body', responseType: 'json'})
  }

  public collectionFromUrl(url: string): Observable<ElementWithId> {
    return this.http.get<ElementWithId>('http://localhost:8080/'+url,
      {observe: 'body', responseType: 'json'})
  }

  private elementToElementResponse(element: ElementWithId | Element): ElementResponse {
    let n = element as ElementWithId
    return {
      id: n.id ? n.id : undefined,
      designation: n.designation,
      description: n.description,
      commentaire: n.commentaire,
      valeur: n.valeur ,
      collection: "/api/collections/" + n.collection
    }
  }
  public deleteElementFromId(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl + "/" + id.toString(),
      { observe: 'response', responseType: 'json' })
      .pipe(tap(console.log), map((response) => response.status === 204))
  }
}
