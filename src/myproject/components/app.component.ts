import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated'; // Todo: deprecated as of RC1

import { AComponent, BComponent, CComponent } from 'myproject/components'

@Component({
	selector: 'myproject-app',
	templateUrl: './myproject/templates/app.html',
	directives: [AComponent, BComponent, CComponent]
})

export class AppComponent {

}
