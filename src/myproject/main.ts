/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/browser.d.ts"/>

import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from 'myproject/components/app.component'; // Works
// import { AppComponent } from 'myproject/components'; // Doesn't work

bootstrap(AppComponent);
