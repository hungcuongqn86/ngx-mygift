import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BasesService {
    static instance: BasesService;

    constructor(public http: HttpClient) {
        return BasesService.instance = BasesService.instance || this;
    }
}
