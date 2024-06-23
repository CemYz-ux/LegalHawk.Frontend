import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LegalHawkBackendClientModule as LegalHawkApi } from '../../backend/Client/LegalHawkBackendClient';
import { environment } from '../../../environments/environment';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'legal-contract-form',
  standalone: true,
  imports: [FormsModule, NgIf, MatButtonModule, RouterModule],
  templateUrl: './legal-contract-form.component.html',
  styleUrl: './legal-contract-form.component.scss',
})
export class LegalContractFormComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const legalHawkBackendClient = new LegalHawkApi.LegalHawkBackendClient(
      environment.backend_baseUrl
    );

    const legalContractCreateOptions: LegalHawkApi.LegalContractCreateOptions =
      {
        title: form.value.title,
        author: form.value.author,
        description: form.value.description,
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

    legalHawkBackendClient
      .createLegalConract(legalContractCreateOptions)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    form.reset();
    this.router.navigate(['/legal-contracts']);
  }
}
