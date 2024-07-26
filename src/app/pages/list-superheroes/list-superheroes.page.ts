import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService/api.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-list-superheroes',
  templateUrl: './list-superheroes.page.html',
  styleUrls: ['./list-superheroes.page.scss'],
})
export class ListSuperheroesPage implements OnInit {
  creators: any[] = [];
  currentLang!: string;

  constructor(
    private apiService: ApiService,
    private LService: LoaderService,
    private router: Router,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.LService.showLoader();
    this.apiService.getCreators().subscribe((data) => {
      this.creators = data.data.results;
      this.LService.dismissLoader();
    });
    this.translationService.language$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }

  goToDetails(creator: any) {
    this.router.navigate(['/detail-superhero', creator.id], {
      state: { creator },
    });
  }
}
