import { Component } from '@angular/core';
import { LegalHawkBackendClientModule as LegalHawkApi } from '../../backend/Client/LegalHawkBackendClient';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { RoundPipe } from '../../../shared/pipes/round.pipe';

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
    const legalHawkBackendClient = new LegalHawkApi.LegalHawkBackendClient(
      environment.backend_baseUrl
    );

    legalHawkBackendClient
      .getLegalContracts(undefined, '-ModifiedAt', page, pageSize)
      .then((result: LegalHawkApi.LegalContractListDtoOkListResponse) => {
        this.legalContracts = result.data || [];
        this.totalItems = result.totalCount || 0;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

  deleteLegalContract(legalContract: LegalHawkApi.LegalContractListDto) {
    const legalHawkBackendClient = new LegalHawkApi.LegalHawkBackendClient(
      environment.backend_baseUrl
    );

    legalHawkBackendClient
      .deleteLegalContractById(legalContract.id?.toString() || '0')
      .then((response) => {
        this.legalContracts = this.legalContracts.filter(
          (c) => c.id !== legalContract.id
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
