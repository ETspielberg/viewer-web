import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ServiceCategory} from '../model/ServiceCategory';

@Injectable()
export class ServicecategoryService {
    private serviceUrl = 'http://localhost:11100';

    constructor (private http: HttpClient) {}

    getAll(): Observable<ServiceCategory[]> {
        return this.http.get<ServiceCategory[]>(this.serviceUrl + '/getAll');
    }
}
