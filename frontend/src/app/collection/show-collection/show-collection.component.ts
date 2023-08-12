import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CollectionWithId} from "../../interfaces/api";
import {CollectionService} from "../../services/collection/collection.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-show-collection',
  templateUrl: './show-collection.component.html',
  styleUrls: ['./show-collection.component.scss']
})
export class ShowCollectionComponent {
  collection: CollectionWithId | undefined = undefined

  constructor(public collectionService: CollectionService,
              private route: ActivatedRoute,
              private location: Location) { }

  goBack(): void {
    this.location.back()
  }


  ngOnInit(): void {
    const idParameter: string | null = this.route.snapshot.paramMap.get('id')
    console.log(idParameter)
    if (idParameter !== null) {
      let id = Number(idParameter)
      this.collectionService.collectionFromId(id)
        .subscribe((collection) => this.collection = collection)
    }
  }
}
