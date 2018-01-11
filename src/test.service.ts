import {Injectable} from 'injection-js';

@Injectable()
export class TestService {

    constructor() {
    }

    test(): void {
        console.log('hello from Test');
    }
}
