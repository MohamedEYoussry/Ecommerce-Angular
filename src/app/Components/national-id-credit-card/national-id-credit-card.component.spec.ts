import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalIDCreditCardComponent } from './national-id-credit-card.component';

describe('NationalIDCreditCardComponent', () => {
  let component: NationalIDCreditCardComponent;
  let fixture: ComponentFixture<NationalIDCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalIDCreditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalIDCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
