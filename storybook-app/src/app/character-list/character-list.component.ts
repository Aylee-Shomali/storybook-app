import { Component } from '@angular/core';
import { characters } from '../../../characterData.json';

@Component({
  selector: 'characterList',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  public thumbnailSrc =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";

  public characterData = characters;
}
