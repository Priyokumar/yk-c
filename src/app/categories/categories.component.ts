import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { ICategory } from '../models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  categoriesStack: any[] = [];
  categories: ICategory[] = [];
  categoriesToDisplay: ICategory[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {

    this.categoryService.getCategories({ topCategory: true }).subscribe(data => {
      this.categories = data.data;
      this.categoriesToDisplay = this.categories;
      this.categoriesStack.push(this.categories);
    }, error => {
      console.log(error);
    })
  }

  onClickCategory(category: ICategory) {
    if (category.subCategories.length > 0) {
      this.categoriesToDisplay = category.subCategories;
      this.categoriesStack.push(this.categoriesToDisplay)
    } else {
      this.router.navigate(['products'], { queryParams: { categoryId: category.id } });
    }
  }  

  onClickBack() {

    if (this.categoriesStack.length >= 2) {
      this.categoriesStack.pop();
      this.categoriesToDisplay = this.categoriesStack[0];
    }

  }

}
