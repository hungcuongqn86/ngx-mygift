import {Injectable} from '@angular/core';
import {
    HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
    HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import {of} from 'rxjs';
import {catchError, last, map, tap} from 'rxjs/operators';

import {MessageService} from './message.service';
import {apiV1Url} from './const';

export interface Res {
    name: string;
    size: number;
    progress: number;
    data: {};
    message: string;
    status: boolean;
}

@Injectable()
export class UploaderService {
    constructor(private http: HttpClient,
                private messenger: MessageService) {
    }

    // If uploading multiple files, change to:
    // upload(files: FileList) {
    //   const formData = new FormData();
    //   files.forEach(f => formData.append(f.name, f));
    //   new HttpRequest('POST', '/upload/file', formData, {reportProgress: true});
    //   ...
    // }

    upload(file: File) {
        if (!file) {
            return;
        }
        // XHR progress events.
        const url = apiV1Url + `upload`;
        const formData = new FormData();
        formData.append('image', file);
        const req = new HttpRequest('POST', url, formData, {
            reportProgress: true
        });
        return this.http.request(req).pipe(
            map(event => this.getEventMessage(event, file)),
            tap(res => this.showProgress(res)),
            last(),
            catchError(this.handleError(file))
        );
    }

    /** Return distinct message for sent, upload progress, & response events */
    private getEventMessage(event: HttpEvent<any>, file: File) {
        const res: Res = {name: file.name, size: file.size, progress: 0, data: {}, message: '', status: false};
        switch (event.type) {
            case HttpEventType.UploadProgress:
                res.progress = Math.round(100 * event.loaded / event.total);
                break;
            case HttpEventType.Response:
                res.progress = 100;
                res.data = event.body;
                res.status = true;
                break;
            default:
                break;
        }
        return res;
    }

    /**
     * Returns a function that handles Http upload failures.
     * @param file - File object for file being uploaded
     *
     * When no `UploadInterceptor` and no server,
     * you'll end up here in the error handler.
     */
    private handleError(file: File) {
        const res: Res = {name: file.name, size: file.size, progress: 0, data: {}, message: '', status: false};
        const userMessage = `${file.name} upload failed.`;

        return (error: HttpErrorResponse) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            const message = (error.error instanceof Error) ?
                error.error.message :
                `server returned code ${error.status} with body "${error.error}"`;

            this.messenger.add(`${userMessage} ${message}`);

            // Let app keep running but indicate failure.
            return of(res);
        };
    }

    private showProgress(res: Res) {
        if (res.message !== '') {
            this.messenger.add(res.message);
        }
    }
}
