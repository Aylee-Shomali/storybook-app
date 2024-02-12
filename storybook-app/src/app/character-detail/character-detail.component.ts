import { Component } from '@angular/core';
import { characters } from '../../../characterData.json';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
    public thumbnailSrc =
      "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";

    public characterData = characters;
}
