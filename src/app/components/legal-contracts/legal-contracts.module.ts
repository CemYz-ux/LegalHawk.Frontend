import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LegalContractsRoutingModule } from './legal-contracts-routing.module';
import { RouterModule } from '@angular/router';
import { LegalContractsComponent } from './legal-contracts.component';
import { LegalContractListComponent } from './list/legal-contract-list.component';
import { LegalContractFormComponent } from './form/legal-contract-form.component';

@NgModule({
  imports: [
    CommonModule,
    LegalContractListComponent,
    LegalContractFormComponent,
    LegalContractsRoutingModule,
    RouterModule,
  ],
  declarations: [LegalContractsComponent],
})
export class LegalContractsModule {}
