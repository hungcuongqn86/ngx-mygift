import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';
import {apiV1Url} from '../../const';

export interface Base {
    id: number;
    code: string;
    name: string;
    price_base: string;
    price: string;
    description: string;
    img: string;
    status: number;
}

@Injectable()
export class BasesService {
    static instance: BasesService;
    private handleError: HandleError;
    public search = {key: '', page_size: 10, page: 1};

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('BasesService');
        return BasesService.instance = BasesService.instance || this;
    }

    getBases(search): Observable<any> {
        const url = apiV1Url + `bases`;
        let params = new HttpParams();
        Object.keys(search).map((key) => {
            params = params.append(key, search[key]);
        });
        return this.http.get<any>(url, {params: params})
            .pipe(
                catchError(this.handleError('getBases', []))
            );
    }

    getBase(id): Observable<any> {
        const url = apiV1Url + `base/${id}`;
        return this.http.get<any>(url)
            .pipe(
                catchError(this.handleError('getBase', []))
            );
    }

    addBase(base: Base): Observable<any> {
        const url = apiV1Url + `base/add`;
        return this.http.post<Base>(url, base)
            .pipe(
                catchError(this.handleError('addBase', base))
            );
    }
}
