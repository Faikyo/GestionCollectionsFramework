import { Component } from '@angular/core';
import {CollectionWithId, ElementWithId} from "../../interfaces/api";
import {CollectionService} from "../../services/collection/collection.service";
import {ElementService} from "../../services/element/element.service";
import {Collection} from "../../interfaces/collection/collection";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {forkJoin, map} from "rxjs";

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent {
  elements: Array<ElementWithId>;
  ready: boolean
  collection: Collection | undefined = undefined

  public arrayColumns : string[] = ['id','designation','collection','actions']

  constructor(private elementService: ElementService, private collectionService: CollectionService) {
    this.elements = []
    this.ready = false
  }


  ngOnInit(): void {
    this.elementService.allElement().subscribe({
      next: (elements) => (this.elements = elements, this.ready = true, console.log(elements)),
      error: (error) => console.log(error)
    });
  }


  delete(id: number) {
    this.elementService.deleteElementFromId(id)
      .subscribe((response) =>
        this.elements = this.elements.filter((element) => element.id !== id))
  }
}
