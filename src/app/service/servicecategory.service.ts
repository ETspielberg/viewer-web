import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ServiceCategory} from '../model/ServiceCategory';
import * as appGlobals from '../app.globals';

@Injectable()
export class ServicecategoryService {
    private serviceUrl = appGlobals.serviceUrl + '/servicecategory';

    constructor (private http: HttpClient) {}

    getAll(): Observable<ServiceCategory[]> {
        return this.http.get<ServiceCategory[]>(this.serviceUrl + '/all');
    }

    getFiltered(filterTarget: string, filterAudience: string): Observable<ServiceCategory[]> {
      console.log('retrieving filtered categories with ' + filterTarget + ' and ' + filterAudience);
  return this.http.get<ServiceCategory[]>(this.serviceUrl + '/filtered?filterTarget=' + filterTarget + '&filterAudience=' + filterAudience);
}
}
