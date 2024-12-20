import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../../environment';
import { HomeService } from '../../../../shared/services/home.service';
import { SafeHtmlPipe } from '../../../../shared/pipes/safeHtmlPipe.pipe';

@Component({
  selector: 'app-algoseek-console',
  imports: [CommonModule, SafeHtmlPipe],
  styleUrl: './algoseek-console.component.scss',
  templateUrl: './algoseek-console.component.html',
})
export class AlgoseekConsoleComponent {
  baseUrl: string = environment.apiUrl;

  constructor(private homeService: HomeService) {}

  get algoseekConsole() {
    return this.homeService.algoseekConsole.asReadonly();
  }

  get hpAlgoseekConsoleIcons() {
    return this.homeService.hpAlgoseekConsoleIcons.asReadonly();
  }
}
