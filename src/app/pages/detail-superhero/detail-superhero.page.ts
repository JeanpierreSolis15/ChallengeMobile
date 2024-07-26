import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/apiService/api.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
@Component({
  selector: 'app-detail-superhero',
  templateUrl: './detail-superhero.page.html',
  styleUrls: ['./detail-superhero.page.scss'],
})
export class DetailSuperheroPage implements OnInit {
  creator: any;
  currentLang!: string;
  imageLoaded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translationService: TranslationService,
    private apiService: ApiService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    if (this.router.getCurrentNavigation()?.extras.state?.['creator']) {
      this.creator =
        this.router.getCurrentNavigation()?.extras.state?.['creator'];
    } else {
      this.loaderService.showLoader();
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.apiService.getCreatorById(id).subscribe(
            (data) => {
              this.creator = data.data.results[0];
              this.loaderService.dismissLoader();
            },
            (error) => {
              console.log(error);
              this.loaderService.dismissLoader();
            }
          );
        }
      });
    }
    this.translationService.language$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  onImageLoad(event: Event) {
    this.imageLoaded = true;
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }
}
