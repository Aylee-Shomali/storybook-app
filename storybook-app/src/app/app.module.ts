import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';

import { IconsModule } from "@progress/kendo-angular-icons";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    ButtonsModule,
    NavigationModule,
    InputsModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, CharacterListComponent, CharacterDetailComponent]
})
export class AppModule { }
