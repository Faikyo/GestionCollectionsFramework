import { Component } from '@angular/core';
import {Collection} from "../../interfaces/collection/collection";
import {CollectionService} from "../../services/collection/collection.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {CollectionWithId, ElementWithId} from "../../interfaces/api";
import {ElementService} from "../../services/element/element.service";
import {Element} from "../../interfaces/element/element";

@Component({
  selector: 'app-update-element',
  templateUrl: './update-element.component.html',
  styleUrls: ['./update-element.component.scss']
})
export class UpdateElementComponent {
  id: number | undefined = undefined
  val: number | undefined = undefined
  collections: Array<CollectionWithId>



  element: Element = {
    designation: "",
    description: "",
    commentaire: "",
    valeur: 0,
    collection: undefined
  }

  get newElement(): boolean { return this.id===undefined }

  constructor(private elementService: ElementService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              private collectionService: CollectionService) {
    this.collections = []
  }

  goBack(): void {
    this.location.back()
  }

  goToElements(): void {
    this.router.navigateByUrl("/elements")
  }


  private set(valeur: number, description: string, designation: string, commentaire: string): void {
    this.element.designation = designation
    this.element.description = description
    this.element.commentaire = commentaire
    this.element.valeur = valeur
  }

  update(valeur: string, description: string, designation: string, commentaire: string): void {
    if (this.id !== undefined) {
      this.val = Number(valeur)
      if (this.val >= 0) {
        this.set(this.val, description, designation, commentaire)
        let element : ElementWithId = {
          id : this.id,
          designation : this.element.designation,
          description : this.element.description,
          commentaire: this.element.commentaire,
          valeur: this.element.valeur
        }
        this.elementService.modifyElement(element)
          .subscribe((r)=>this.goToElements)
        }
      }
  }


  add(valeur: string, description: string, designation: string, commentaire: string, collectionId : string): void {
    this.set(Number(valeur), description, designation, commentaire)
    this.element.collection=collectionId
    if (this.element.valeur>=0 ){
      this.elementService.addElement(this.element)
        .subscribe({
          next: value => this.goToElements(),
          error: error => console.log(error)
        })
    }
  }

  ngOnInit(): void {
    this.collectionService.all().subscribe({
      next: (collections) => (this.collections = collections, console.log(collections )),
      error: (error) => console.log(error)
    })
    const idParameter: string | null = this.route.snapshot.paramMap.get('id')
    if (idParameter !== null) {
      this.id = Number(idParameter)
      this.elementService.elementFromId(this.id)
        .subscribe((element)=>this.element=element)
    }
  }

}
