import { Component } from '@angular/core';
import {CollectionService} from "../../services/collection/collection.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Location} from "@angular/common";
import {CollectionWithId} from "../../interfaces/api";
import {Collection} from "../../interfaces/collection/collection";

@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.scss']
})
export class UpdateCollectionComponent {

  id: number | undefined = undefined
  collection: Collection = {
    titre: "",
    description: "",
    date: new Date()
  }

  get newCollection(): boolean { return this.id===undefined }

  constructor(private collectionService: CollectionService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  goBack(): void {
    this.location.back()
  }

  goToCollections(): void {
    this.router.navigateByUrl("/collections")
  }


  private set(titre: string, description: string): void {
    this.collection.titre = titre
    this.collection.description = description
    this.collection.date = new Date()
  }

  update(title: string, body: string): void {
    if (this.id !== undefined) {
      this.set(title, body)
      let collection : CollectionWithId = {
        id : this.id,
        titre : this.collection.titre,
        description : this.collection.description,
        date: this.collection.date
      }
      this.collectionService.modifyCollection(collection)
        .subscribe((r)=>this.goToCollections)
    }
  }

  add(title: string, body: string): void {
    this.set(title, body)
    let collection : Collection = {
      titre : this.collection.titre,
      description : this.collection.description,
      date: this.collection.date
    }
    this.collectionService.addCollection(collection)
      .subscribe((r)=>this.goToCollections())
  }

  ngOnInit(): void {
    const idParameter: string | null = this.route.snapshot.paramMap.get('id')
    if (idParameter !== null) {
      this.id = Number(idParameter)
      this.collectionService.collectionFromId(this.id)
        .subscribe((collection)=>this.collection=collection)
    }
  }
}
