import { Component } from '@angular/core';
import { characters } from '../../../characterData.json';

@Component({
  selector: 'character-list',
  templateUrl: './characterList.component.html',
  styleUrl: './characterList.component.css'
})
export class CharacterListComponent {
  public thumbnailSrc =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";

  public characterData = characters;
}
