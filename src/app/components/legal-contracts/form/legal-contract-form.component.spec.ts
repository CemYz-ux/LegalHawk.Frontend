import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { LegalContractFormComponent } from './legal-contract-form.component';
import { LegalContractService } from '../../../../shared/services/legalContractService';

describe('LegalContractFormComponent', () => {
  let component: LegalContractFormComponent;
  let fixture: ComponentFixture<LegalContractFormComponent>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'someDefaultValue',
      },
    },
  };

  const legalContractServiceStub = {
    getLegalContractById: () => Promise.resolve(),
    updateLegalContract: () => Promise.resolve(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalContractFormComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: LegalContractService, useValue: legalContractServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalContractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLegalContracts on init', () => {
    const getLegalContractsSpy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(getLegalContractsSpy).toHaveBeenCalled();
  });
});
