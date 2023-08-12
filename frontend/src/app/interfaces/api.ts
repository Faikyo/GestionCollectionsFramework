import {Collection} from "./collection/collection";
import {Element} from "./element/element";

export interface apiResponse<T> {
  "@context": string,
  "@id": string,
  "@type": string,
  "hydra:member": Array<T>
}

export interface CollectionWithId extends Collection {
  id: number
}

export interface ElementWithId extends Element{
  id: number
}
export interface ElementResponse {
  id?: number

  designation: string

  description: string

  commentaire: string

  valeur: number

  collection? : string
}
