import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';
import {apiV1Url} from '../../const';
import {Res} from '../../uploader.service';

export interface Base {
    id: number;
    code: string;
    name: string;
    price_base: string;
    price: string;
    description: string;
    img: string;
    status: number;
    cdx: number;
    cdy: number;
    img_height: number;
    img_width: number;
    height: number;
    width: number;
    curls: string;
    rotate: number;
    pulled_oblique: string;
    colors: string;
    delete_f: number;
}

@Injectable()
export class BasesService {
    static instance: BasesService;
    private handleError: HandleError;
    public search = {key: '', page_size: 10, page: 1};
    public base: Base = {
        id: null, code: null, name: null, price_base: null, price: null
        , description: null, img: null, status: 0
        , cdx: 0, cdy: 0, img_height: 0, img_width: 0, height: 0, width: 0, rotate: 0, curls: '', pulled_oblique: ''
        , colors: ''
        , delete_f: 0
    };
    public fileRes: Res = {
        type: '',
        name: '', size: 0, progress: 0
        , data: {url: ''}, message: '', status: false
    };

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

    editBase(base: Base): Observable<any> {
        const url = apiV1Url + `base/${base.id}`;
        console.log(base);
        return this.http.put<Base>(url, base)
            .pipe(
                catchError(this.handleError('editBase', base))
            );
    }
}
