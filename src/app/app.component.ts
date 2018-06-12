import {Component, OnInit} from '@angular/core';
import {ServicecategoryService} from './service/servicecategory.service';
import {ServiceCategory} from './model/ServiceCategory';
import {ActiveSlide} from './model/ActiveSlide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: []
})
export class AppComponent implements OnInit {

  serviceCategories: ServiceCategory[];

  activeSlide: ActiveSlide;

  activeCategory: ServiceCategory;

  constructor( private servicecategoryService: ServicecategoryService) {
  }

  ngOnInit() {
    this.servicecategoryService.getAll().subscribe(
      data => {
        this.serviceCategories = data;
        this.activeSlide = new ActiveSlide('', 0);
        this.activeCategory = this.serviceCategories[this.activeSlide.relatedTarget];
      }
    );
  }

  activeSlideChange() {
    this.activeCategory = this.serviceCategories[this.activeSlide.relatedTarget];
  }
}
