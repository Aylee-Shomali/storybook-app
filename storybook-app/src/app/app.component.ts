import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'storybook-app';
  public thumbnailSrc =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";
  public cover =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg";
  public liked = false;

  public toggleLike(): void {
      this.liked = !this.liked;
  }
  
  public heartIcon(): string {
    return this.liked
        ? "k-icon k-font-icon k-i-heart"
        : "k-icon k-font-icon k-i-heart-outline";
  }
}
