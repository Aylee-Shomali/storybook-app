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
  pinWidgetloading = true;

  constructor() {
    const characterId = Number(this.route.snapshot.params['id']);

    this.character = characters[characterId];
  }

  public noImageSrc = "noImage.png";

  public characterData = characters;

  forceReload() {
    window.location.reload();
  }

  pinterestBoardLoading(){
    // This is the element that shows if the widget has not loaded yet.
    let refreshButton = document.querySelector(".pinterest-section button");
    let pinWidget = document.querySelector(".pinterest-section a:first-of-type + br + a");

    console.log(`pinWidget: ${pinWidget?.tagName}`);
    if(pinWidget?.tagName != undefined){
      refreshButton?.classList.remove('hidden');
    } else {
      refreshButton?.classList.add('hidden');
    }
  }

  ngOnInit(){
    this.pinterestBoardLoading();
    setInterval(this.pinterestBoardLoading, 2000);
  }

}
