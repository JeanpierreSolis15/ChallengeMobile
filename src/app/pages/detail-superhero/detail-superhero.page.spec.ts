import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSuperheroPage } from './detail-superhero.page';

describe('DetailSuperheroPage', () => {
  let component: DetailSuperheroPage;
  let fixture: ComponentFixture<DetailSuperheroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSuperheroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
