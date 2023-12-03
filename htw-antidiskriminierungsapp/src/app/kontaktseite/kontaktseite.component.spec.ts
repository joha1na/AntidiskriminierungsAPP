import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktseiteComponent } from './kontaktseite.component';

describe('KontaktseiteComponent', () => {
  let component: KontaktseiteComponent;
  let fixture: ComponentFixture<KontaktseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktseiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaktseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
