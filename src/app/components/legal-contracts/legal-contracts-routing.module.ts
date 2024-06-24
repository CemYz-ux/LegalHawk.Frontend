import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalContractsComponent } from './legal-contracts.component';
import { LegalContractListComponent } from './list/legal-contract-list.component';
import { LegalContractFormComponent } from './form/legal-contract-form.component';

const routes: Routes = [
  {
    path: '',
    component: LegalContractsComponent,
    children: [
      {
        path: '',
        component: LegalContractListComponent,
      },
      {
        path: 'create',
        component: LegalContractFormComponent,
      },
      {
        path: ':legalContractId/edit',
        component: LegalContractFormComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LegalContractsRoutingModule {}
