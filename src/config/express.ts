const express = require('express');
import {ApplicationContext} from './context';
import {ExpressServiceRegistry} from 'js-restful-express/src/express/service-registry';

export class ExpressConfiguration {
    private static controllers : Function[]= [];

    constructor(readonly app) {

    }

    bootstrap() {
        this.registerControllers();

        const port = process.env.PORT || 3000;
        const env = this.app.get("env");
        this.app.listen(port, () => {
            console.log(("  App is running at http://localhost:%d in %s mode"), port, env);
            console.log("  Press CTRL-C to stop\n");
        });
    }

    registerControllers() {
        ExpressConfiguration.controllers.forEach(controller => ExpressServiceRegistry.registerService(this.app, controller()));
    }

    static registerController(controller: Function) {
        ExpressConfiguration.controllers.push(controller);
    }

    static configure(): ExpressConfiguration {
        const app = express();
        return new ExpressConfiguration(app);
    }
}

export function Controller() {
    return (constructor: Function) => {
        ExpressConfiguration.registerController(() => ApplicationContext.instance().get(constructor));
    }
}