import {Component, OnInit} from '@angular/core';
import {ServicecategoryService} from './service/servicecategory.service';
import {ServiceCategory} from './model/ServiceCategory';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: []
})
export class AppComponent implements OnInit {

  serviceCategories: ServiceCategory[];

  activeSlide = 0;

  activeCategory: ServiceCategory;

  constructor( private servicecategoryService: ServicecategoryService) {
  }

  ngOnInit() {
    this.servicecategoryService.getAll().subscribe(
      data => {
        this.serviceCategories = data;
        this.activeSlide = 0;
        this.activeCategory = this.serviceCategories[this.activeSlide];
          console.log(this.activeCategory );
      }
    );
  }

  activeSlideChange() {
    this.activeCategory = this.serviceCategories[this.activeSlide];
    console.log(this.activeCategory);
  }
}
