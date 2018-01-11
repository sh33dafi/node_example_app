import {Injectable} from 'injection-js';
import {TestService} from './test.service';

@Injectable()
export class FooService {

    constructor(private t: TestService) {
    }

    test(): void {
        this.t.test();
        console.log('hello from Foo');
    }
}
