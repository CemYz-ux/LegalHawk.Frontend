import { Injectable } from '@angular/core';
import { LegalHawkBackendClientModule as LegalHawkApi } from '../../app/backend/Client/LegalHawkBackendClient';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LegalContractService {
  legalHawkBackendClient!: LegalHawkApi.LegalHawkBackendClient;

  constructor() {
    this.legalHawkBackendClient = new LegalHawkApi.LegalHawkBackendClient(
      environment.backend_baseUrl
    );
  }

  async getLegalContracts(
    sorts: string,
    page: number,
    pageSize: number
  ): Promise<LegalHawkApi.ILegalContractListDtoOkListResponse> {
    try {
      const response = await this.legalHawkBackendClient.getLegalContracts(
        undefined,
        sorts,
        page,
        pageSize
      );
      return response;
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  async getLegalContractById(
    legalContractId: string
  ): Promise<LegalHawkApi.LegalContractDetailDto | undefined> {
    try {
      const response = await this.legalHawkBackendClient.getLegalContractById(
        legalContractId
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async createLegalContract(
    legalContract: LegalHawkApi.ILegalContractDetailDto
  ) {
    const legalContractCreateOptions: LegalHawkApi.LegalContractCreateOptions =
      {
        title: legalContract.title || '',
        author: legalContract.author || '',
        description: legalContract.description,
        init: function (_data?: any): void {
          if (_data) {
            this.author = _data['author'];
            this.title = _data['title'];
            this.description = _data['description'];
          }
        },
        toJSON(data?: any) {
          data = typeof data === 'object' ? data : {};
          data['author'] = this.author;
          data['title'] = this.title;
          data['description'] = this.description;
          return data;
        },
      };

    try {
      await this.legalHawkBackendClient.createLegalConract(
        legalContractCreateOptions
      );
    } catch (error) {}
  }

  async updateLegalContract(
    legalContractId: string,
    legalContract: LegalHawkApi.ILegalContractDetailDto
  ) {
    const legalContractUpdateOptions: LegalHawkApi.LegalContractUpdateOptions =
      {
        title: legalContract.title || '',
        author: legalContract.author || '',
        description: legalContract.description,
        init: function (_data?: any): void {
          if (_data) {
            this.author = _data['author'];
            this.title = _data['title'];
            this.description = _data['description'];
          }
        },
        toJSON(data?: any) {
          data = typeof data === 'object' ? data : {};
          data['author'] = this.author;
          data['title'] = this.title;
          data['description'] = this.description;
          return data;
        },
      };

    try {
      var response = await this.legalHawkBackendClient.updateLegalConract(
        legalContractId,
        legalContractUpdateOptions
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteLegalContract(legalContractId: string) {
    try {
      await this.legalHawkBackendClient.deleteLegalContractById(
        legalContractId
      );
    } catch (error) {
      console.error(error);
    }
  }
}
