import {DELETE, GET, HeaderParam, Path, PathParam, POST, PUT} from 'js-restful';
import {Controller} from './config/express';
import {FooService} from './foo.service';

@Controller()
@Path('/test')
export class TestController {

    constructor(private testService: FooService) {

    }

    @GET()
    test(): string {
        this.testService.test();
        return 'Works';
    }


}