(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'myproject':							'myproject', // 'dist',
		'rxjs':									'lib/rxjs',
		'angular2-in-memory-web-api':			'lib/angular2-in-memory-web-api',
		'@angular':								'lib/@angular',
		'angular2-moment':						'lib/angular2-moment',
        'moment':								'lib/moment'
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'myproject':							{ main: 'main.js', defaultExtension: 'js' },
		'myproject/components':					{ main: 'index.js', defaultExtension: 'js' },
		
		'rxjs':									{ defaultExtension: 'js' },
		'angular2-in-memory-web-api':			{ defaultExtension: 'js' },
		'angular2-moment':						{ main: 'index.js', defaultExtension: 'js' },

		'@angular/common':						{ main: 'index.js', defaultExtension: 'js' },
		'@angular/compiler':					{ main: 'index.js', defaultExtension: 'js' },
		'@angular/core':						{ main: 'index.js', defaultExtension: 'js' },
		'@angular/http':						{ main: 'index.js', defaultExtension: 'js' },
		'@angular/platform-browser':			{ main: 'index.js', defaultExtension: 'js' },
		'@angular/platform-browser-dynamic':	{ main: 'index.js', defaultExtension: 'js' },
		'@angular/router':						{ main: 'index.js', defaultExtension: 'js' },
		'@angular/router-deprecated':			{ main: 'index.js', defaultExtension: 'js' },
		'@angular/testing':						{ main: 'index.js', defaultExtension: 'js' },
		'@angular/upgrade':						{ main: 'index.js', defaultExtension: 'js' }
	};

	var config = {
		map: map,
		packages: packages
	};

	// filterSystemConfig - index.html's chance to modify config before we register it.
	if (global.filterSystemConfig) {
		global.filterSystemConfig(config);
	}

	System.config(config);
})(this);

