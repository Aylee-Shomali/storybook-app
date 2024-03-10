import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NoteListComponent } from './note-list/note-list.component';

import { IconsModule } from "@progress/kendo-angular-icons";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    NoteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ButtonsModule,
    NavigationModule,
    InputsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
