import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSuperheroesPage } from './list-superheroes.page';

describe('ListSuperheroesPage', () => {
  let component: ListSuperheroesPage;
  let fixture: ComponentFixture<ListSuperheroesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuperheroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
