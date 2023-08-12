import { Component } from '@angular/core';
import {CollectionWithId, ElementWithId} from "../../interfaces/api";
import {CollectionService} from "../../services/collection/collection.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ElementService} from "../../services/element/element.service";

@Component({
  selector: 'app-show-element',
  templateUrl: './show-element.component.html',
  styleUrls: ['./show-element.component.scss']
})
export class ShowElementComponent {
  element: ElementWithId | undefined = undefined

  constructor(public elementService: ElementService,
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
      this.elementService.elementFromId(id)
        .subscribe((element) => this.element = element)
    }
  }
}
