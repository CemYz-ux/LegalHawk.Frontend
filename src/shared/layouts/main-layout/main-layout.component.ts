import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from '../../base/components/base-component';
import { HeaderComponent } from '../../components/headers/header/header.component';
import { FooterComponent } from '../../components/footers/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent extends BaseComponent {}
