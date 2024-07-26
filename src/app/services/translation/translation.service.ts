import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private languageSubject = new BehaviorSubject<string>('en');
  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      this.setLanguage(browserLang.match(/en|es/) ? browserLang : 'en');
    } else {
      this.setLanguage('en');
    }
  }

  changeLanguage(lang: string) {
    this.setLanguage(lang);
  }

  private setLanguage(lang: string) {
    this.translate.use(lang);
    this.languageSubject.next(lang);
  }

  get currentLang() {
    return this.translate.currentLang;
  }
}
