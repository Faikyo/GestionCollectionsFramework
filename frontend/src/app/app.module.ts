import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { CollectionsComponent } from './collection/collections/collections.component';
import { UpdateCollectionComponent } from './collection/update-collection/update-collection.component';
import { ShowCollectionComponent } from './collection/show-collection/show-collection.component';
import {HttpClientModule} from "@angular/common/http";
import { MarkdownPipe } from './markdown.pipe';
import { ElementsComponent } from './element/elements/elements.component';
import { ShowElementComponent } from './element/show-element/show-element.component';
import { UpdateElementComponent } from './element/update-element/update-element.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    CollectionsComponent,
    UpdateCollectionComponent,
    ShowCollectionComponent,
    MarkdownPipe,
    ElementsComponent,
    ShowElementComponent,
    UpdateElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
