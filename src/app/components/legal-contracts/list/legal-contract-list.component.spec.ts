import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { LegalContractListComponent } from './legal-contract-list.component';

describe('LegalContractListComponent', () => {
  let component: LegalContractListComponent;
  let fixture: ComponentFixture<LegalContractListComponent>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'someDefaultValue',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalContractListComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
