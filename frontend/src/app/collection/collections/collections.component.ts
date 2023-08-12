import { Component, OnInit } from '@angular/core';
import {CollectionService} from "../../services/collection/collection.service";
import {CollectionWithId} from "../../interfaces/api";



@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections: Array<CollectionWithId>;
  ready: boolean

  public arrayColumns : string[] = ['id','titre','description','date', 'actions']

  constructor(private collectionService: CollectionService) {
    this.collections = []
    this.ready = false
  }


  ngOnInit(): void {
    this.collectionService.all().subscribe({
      next: (collections) => (this.collections = collections, this.ready = true, console.log(collections)),
      error: (error) => console.log(error)
    });

  }
}
