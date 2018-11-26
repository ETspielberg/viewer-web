import {Component, OnInit} from '@angular/core';
import {ServicecategoryService} from './service/servicecategory.service';
import {ServiceCategory} from './model/ServiceCategory';
import {ActiveSlide} from './model/ActiveSlide';
import {ActivatedRoute, Params, Router} from '@angular/router';

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

  filterTargetedAudience: string;

  filterAudienceLevel: string;

  constructor( private servicecategoryService: ServicecategoryService,
               private router: Router,
               private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['filterTarget'] !== undefined) {
        this.filterTargetedAudience = params['filterTarget'].trim();
        console.log('read target filter ' + this.filterTargetedAudience);
      } else {
        this.filterTargetedAudience = '';
      }
      if (params['filterAudience'] !== undefined) {
        this.filterAudienceLevel = params['filterAudience'].trim();
        console.log('read audience filter ' + this.filterAudienceLevel);
      } else {
        this.filterAudienceLevel = '';
      }
      this.servicecategoryService.getFiltered(this.filterTargetedAudience, this.filterAudienceLevel).subscribe(
        data => {
          this.serviceCategories = data;
          this.activeSlide = new ActiveSlide('', 0);
          this.activeCategory = this.serviceCategories[this.activeSlide.relatedTarget];
        }
      );
    });
  }

  goToserviceList() {
    window.location.href = '#serviceList?filterTarget=' + this.filterTargetedAudience + '&filterAudience=' + this.filterAudienceLevel;
  }

  activeSlideChange() {
    this.activeCategory = this.serviceCategories[this.activeSlide.relatedTarget];
  }
}
