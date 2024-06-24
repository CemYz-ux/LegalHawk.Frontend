import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LegalHawkBackendClientModule as LegalHawkApi } from '../../../backend/Client/LegalHawkBackendClient';
import { environment } from '../../../../environments/environment';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { LegalContractService } from '../../../../shared/services/legalContractService';

@Component({
  selector: 'legal-contract-form',
  standalone: true,
  imports: [FormsModule, NgIf, MatButtonModule, RouterModule],
  templateUrl: './legal-contract-form.component.html',
  styleUrl: './legal-contract-form.component.scss',
})
export class LegalContractFormComponent {
  legalContract: LegalHawkApi.ILegalContractDetailDto = {
    title: '',
    author: '',
    description: '',
  };
  legalContractId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private legalContractService: LegalContractService
  ) {}

  ngOnInit(): void {
    this.legalContractId = this.route.snapshot.paramMap.get('legalContractId');
    if (this.legalContractId) {
      this.legalContractService
        .getLegalContractById(this.legalContractId)
        .then((legalContract) => {
          this.legalContract =
            legalContract as LegalHawkApi.ILegalContractDetailDto;
        });
    }
  }

  onSubmit(form: NgForm) {
    if (this.legalContractId) {
      this.legalContractService.updateLegalContract(
        this.legalContractId,
        this.legalContract
      );
    } else {
      this.legalContractService.createLegalContract(this.legalContract);
    }

    form.reset();
    this.router.navigate(['/legal-contracts'], { relativeTo: this.route });
  }
}
