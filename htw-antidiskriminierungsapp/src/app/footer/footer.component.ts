import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  selectedLanguage = 'de';
  deutsch = 'de';
  english = 'en';


  constructor(public translate: TranslateService,) {
  }

  ngOnInit(): void {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  selectLang(): void {
    if (this.selectedLanguage) {
      this.switchLanguage(this.selectedLanguage)
    }
  }

}
