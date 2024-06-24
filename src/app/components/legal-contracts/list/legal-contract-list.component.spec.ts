import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { LegalContractListComponent } from './legal-contract-list.component';
import { LegalContractService } from '../../../../shared/services/legalContractService';

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

  const legalContractServiceStub = {
    getLegalContractById: () => Promise.resolve(),
    getLegalContracts: () => Promise.resolve(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalContractListComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: LegalContractService, useValue: legalContractServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLegalContracts on init', () => {
    const getLegalContractsSpy = spyOn(component, 'getLegalContracts');
    component.ngOnInit();
    expect(getLegalContractsSpy).toHaveBeenCalled();
  });

  it('should call getLegalContracts on next', () => {
    const getLegalContractsSpy = spyOn(component, 'getLegalContracts');
    component.totalItems = 10;
    component.onNext();
    expect(getLegalContractsSpy).toHaveBeenCalled();
  });

  it('should call getLegalContracts on previous', () => {
    const getLegalContractsSpy = spyOn(component, 'getLegalContracts');
    component.page = 2;
    component.OnPrevious();
    expect(getLegalContractsSpy).toHaveBeenCalled();
  });

  it('should not call getLegalContracts on next if page is at the end', () => {
    const getLegalContractsSpy = spyOn(component, 'getLegalContracts');
    component.totalItems = 5;
    component.page = 2;
    component.onNext();
    expect(getLegalContractsSpy).not.toHaveBeenCalled();
  });

  it('should not call getLegalContracts on previous if page is at the start', () => {
    const getLegalContractsSpy = spyOn(component, 'getLegalContracts');
    component.page = 1;
    component.OnPrevious();
    expect(getLegalContractsSpy).not.toHaveBeenCalled();
  });
});
