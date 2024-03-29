import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CharacterListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CharacterListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(CharacterListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, storybook-app');
  });
});
