/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/browser.d.ts"/>
System.register(['@angular/platform-browser-dynamic', 'myproject/components'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, components_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(components_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map