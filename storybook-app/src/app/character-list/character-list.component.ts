import { Component } from '@angular/core';
import { characters } from '../../../characterData.json';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  public noImageSrc = "noImage.png";

  public characterData = characters;
}
