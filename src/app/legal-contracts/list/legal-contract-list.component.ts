import { Component } from '@angular/core';
import { LegalHawkBackendClientModule as LegalHawkApi } from '../../backend/Client/LegalHawkBackendClient';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RoundPipe } from '../../../shared/pipes/round.pipe';
import { LegalContractService } from '../../../shared/services/legalContractService';

@Component({
  selector: 'legal-contract-list',
  standalone: true,
  imports: [DatePipe, MatButton, RouterLink, RoundPipe],
  templateUrl: './legal-contract-list.component.html',
  styleUrl: './legal-contract-list.component.scss',
})
export class LegalContractListComponent {
  legalContracts: Array<LegalHawkApi.LegalContractListDto> = [];
  pageSize = 5;
  page = 1;
  totalItems = 0;

  constructor(private legalContractService: LegalContractService) {}

  ngOnInit(): void {
    this.getLegalContracts(this.page, this.pageSize);
  }

  onNext() {
    if (this.page * this.pageSize >= this.totalItems) {
      return;
    }
    this.page++;
    this.getLegalContracts(this.page, this.pageSize);
  }

  OnPrevious() {
    if (this.page <= 1) {
      return;
    }
    this.page--;
    this.getLegalContracts(this.page, this.pageSize);
  }

  getLegalContracts(page: number, pageSize: number) {
    this.legalContractService
      .getLegalContracts('-ModifiedAt', page, pageSize)
      .then((legalContractsResponse) => {
        this.legalContracts = legalContractsResponse.data || [];
        this.totalItems = legalContractsResponse.totalCount || 0;
      });
  }

  deleteLegalContract(legalContract: LegalHawkApi.LegalContractListDto) {
    if (legalContract.id) {
      this.legalContractService.deleteLegalContract(legalContract.id);
      this.getLegalContracts(this.page, this.pageSize);
    }
  }
}
