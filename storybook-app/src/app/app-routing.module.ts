import { NgModule } from '@angular/core';
import { CharacterListComponent } from './characterList/characterList.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
    title: 'Character List'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
