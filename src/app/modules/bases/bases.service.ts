import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {HttpErrorHandler, HandleError} from '../../http-error-handler.service';
import {apiV1Url} from '../../const';

export interface Mockup {
    id: number;
    base_id: number;
    index: number;
    status: number;
    img: string;
    cdx: number;
    cdy: number;
    img_height: number;
    img_width: number;
    height: number;
    width: number;
    curls: string;
    rotate: number;
    pulled_oblique: string;
    delete_f: number;
}

export interface Base {
    id: number;
    code: string;
    name: string;
    price_base: string;
    price: string;
    description: string;
    status: number;
    colors: string;
    mockup: Array<Mockup>;
    delete_f: number;
}

@Injectable()
export class BasesService {
    static instance: BasesService;
    private handleError: HandleError;
    public search = {key: '', page_size: 10, page: 1};
    public base: Base = {
        id: null, code: null, name: null, price_base: null, price: null
        , description: null, status: 0
        , colors: ''
        , mockup: null
        , delete_f: 0
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

    updateBase() {
        if (this.base.id === null) {
            this.addBase(this.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        } else {
            this.editBase(this.base).subscribe(
                res => {
                    this.updateSuccess(res);
                }
            );
        }
    }

    private updateSuccess(res: any) {
        if (res.success) {
            // end loading
        }
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
