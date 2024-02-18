import { NgModule } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
    title: 'Character List'
  },
  {
    path: 'details/:id',
    component: CharacterDetailComponent,
    title: 'Character Details'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
