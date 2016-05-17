# Angular2 Exception MWE

## What is this?

This MWE provokes this exception:

    __EXCEPTION__: Unexpected directive value '__undefined__' on the View of component '__AppComponent__'

It was uploaded for this StackOverflow question:

    http://stackoverflow.com/questions/37274201/exception-in-main-ts-when-importing-components-via-an-index-ts-file

## Fixes

The exception can be avoided, if the `import` in `/src/myproject/main.ts` is changed from:

    import { AppComponent } from 'myproject/components';
    
to

    import { AppComponent } from 'myproject/components/app.component';
