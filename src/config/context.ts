import 'reflect-metadata';
import {Provider} from 'injection-js/provider';
import {ReflectiveInjector} from 'injection-js';

export class ApplicationContext {

    private static applicationContext: ApplicationContext = null;

    private providers: Provider[] = [];
    private injector: ReflectiveInjector;

    register(type: any): ApplicationContext {
        this.providers.push(type);
        return this;
    }

    bootstrap() {
        this.injector = ReflectiveInjector.resolveAndCreate(this.providers);
    }

    get(token: any) {
        return this.injector.get(token);
    }

    static instance(): ApplicationContext {
        if (!ApplicationContext.applicationContext) {
            ApplicationContext.applicationContext = new ApplicationContext();
        }

        return ApplicationContext.applicationContext;
    }
}