import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalContractFormComponent } from './legal-contract-form.component';

describe('LegalContractFormComponent', () => {
  let component: LegalContractFormComponent;
  let fixture: ComponentFixture<LegalContractFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalContractFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
