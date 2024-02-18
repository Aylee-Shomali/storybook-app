import { Component, inject  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { characters } from '../../../characterData.json';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  character: Character;

  constructor() {
    const characterId = Number(this.route.snapshot.params['id']);

    this.character = characters[characterId];
  }

    public thumbnailSrc =
      "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";

    public characterData = characters;
}
