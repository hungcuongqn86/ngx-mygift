import {Injectable} from '@angular/core';

@Injectable()
export class LoadingService {
    progress: any[] = [];

    setProgress(progress: any[]) {
        this.progress = progress;
    }
}
