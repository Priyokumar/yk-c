import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/categories/services/category.service';
import { ICategory } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  categories: ICategory[] = [];

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
    }, error => {
      console.log(error);
    })
  }

  onClickCategory(category: ICategory) {
      this.router.navigate(['products'], { queryParams: { categoryId: category.id } });
  }  

}
