import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryKontaktformularComponent } from './summary-kontaktformular.component';

describe('SummaryKontaktformularComponent', () => {
  let component: SummaryKontaktformularComponent;
  let fixture: ComponentFixture<SummaryKontaktformularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryKontaktformularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryKontaktformularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
