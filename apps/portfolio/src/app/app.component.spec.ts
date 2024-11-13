import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', (): void => {
  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterModule.forRoot([])],
    }).compileComponents();
  });

  it('should render title', (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome portfolio'
    );
  });

  it(`should have as title 'portfolio'`, (): void => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });
});
