import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalContractListComponent } from './legal-contract-list.component';

describe('LegalContractListComponent', () => {
  let component: LegalContractListComponent;
  let fixture: ComponentFixture<LegalContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalContractListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
