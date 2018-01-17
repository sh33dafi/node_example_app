import {ApplicationContext} from './config/context';
import {TestService} from './test.service'
import {FooService} from './foo.service';
import {ExpressConfiguration} from './config/express';
import {TestController} from './test.controller';

ApplicationContext.instance()
    .register(TestService)
    .register(FooService)
    .register(TestController)
    .bootstrap();

ExpressConfiguration.configure().bootstrap();