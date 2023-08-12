import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {MenuComponent} from "./menu/menu.component";
import {CollectionsComponent} from "./collection/collections/collections.component";
import {ShowCollectionComponent} from "./collection/show-collection/show-collection.component";
import {UpdateCollectionComponent} from "./collection/update-collection/update-collection.component";
import {ElementsComponent} from "./element/elements/elements.component";
import {ShowElementComponent} from "./element/show-element/show-element.component";
import {UpdateElementComponent} from "./element/update-element/update-element.component";


const routes: Routes = [
  {path:'accueil', component: AccueilComponent},
  {path:'', component: AccueilComponent},
  {path:'collections', component: CollectionsComponent},
  {path:'collection/:id', component: ShowCollectionComponent},
  {path:'edit-collection/:id', component: UpdateCollectionComponent},
  {path:'edit-collection', component: UpdateCollectionComponent},
  {path:'elements', component: ElementsComponent},
  {path:'element/:id', component: ShowElementComponent},
  {path:'edit-element/:id', component: UpdateElementComponent},
  {path:'edit-element', component: UpdateElementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
