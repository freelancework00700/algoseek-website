import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/services/home.service';
import { environment } from '../../../../../../environment';
import { SafeHtmlPipe } from '../../../../shared/pipes/safeHtmlPipe.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-algoseek-console',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './algoseek-console.component.html',
  styleUrl: './algoseek-console.component.scss'
})
export class AlgoseekConsoleComponent {

  baseUrl: string = environment.apiUrl;

  constructor(
    private homeService: HomeService,
  ){}

  get algoseekConsole() {
    return this.homeService.algoseekConsole.asReadonly();
  }

  get hpAlgoseekConsoleIcons() {
    return this.homeService.hpAlgoseekConsoleIcons.asReadonly();
  }

}
