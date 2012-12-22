/*global module:false*/
module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '// <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "// " + pkg.homepage + "\n" : "" %>' +
				'// Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>'
		},
		clean: {
			app: {
				src: ["build", "docs", "app/views/templates.html", 'test/unit/js']
			}
		},
		lint: {
			files: ["app/entityContext.json"]
		},
		jade: {
			templates: {
				files: {
					'app/views/templates.html': ['app/components/**/*jade']
				}
			},
			page: {
				files: {
					'build/index.html': 'app/views/page/index.jade'
				}
			},
			list: {
				files: {
					'build/views/location_open.html' : 'app/views/list/location_open.jade',
					'build/views/location_list.html' : 'app/views/list/location_list.jade',
					'build/views/location_detail.html' : 'app/views/list/location_detail.jade',
					'build/views/user_list.html' : 'app/views/list/user_list.jade',
					'build/views/add.html' : 'app/views/page/add.jade'
				}
			}
		},
		livescript: {
			app: {
				files: {
//					'build/scripts/app.js': 'app/scripts/ls/app.ls',
					'build/scripts/filters.js': 'app/scripts/ls/filters/*ls',
					'build/scripts/services.js': 'app/scripts/ls/services/*ls',
					'build/scripts/directives.js': 'app/scripts/ls/directives/*ls',
					'build/scripts/controllers.js': 'app/scripts/ls/controllers/*ls',
					'build/scripts/components.js': 'app/components/**/script.ls'
				},
				options: {
					bare: false
				}
			},
			dist: {
				files: {
					'build/dist/<%= pkg.name %>.js': 'build/dist/<%= pkg.name %>.ls'
				}
			},
			test: {
				files: {
					'test/unit/js/components.js': ['app/components/**/test*ls'],
					'test/e2e/e2e.js': 'test/e2e/ls/**/*ls'
				},
				options: {
					bare: true
				}
			}
		},
		stylus: {
			app: {
				files: {
					'build/styles/<%= pkg.name %>.css': ['app/styles/styl/*styl', 'app/components/**/*styl']
				}
			}
		},
		concat: {
			js: {
				src: [
					'build/scripts/components.js',
					'app/components/**/*js',
					'app/scripts/js/directives/*.js'
				],
				dest: 'build/scripts/components.js'
			},
			jsServices: {
				src: [
					'build/scripts/services.js',
					'app/scripts/js/services/*.js'
				],
				dest: 'build/scripts/services.js'
			},
			jsFilters: {
				src: [
					'build/scripts/filters.js',
					'app/scripts/js/filters/*.js'
				],
				dest: 'build/scripts/filters.js'
			},
			ls: {
				src: [
//					'app/scripts/ls/app.ls',
					'app/scripts/ls/**/*ls',
					'app/components/**/*ls'
				],
				dest: 'build/dist/<%= pkg.name %>.ls'
			},
			dist: {
				src: [
					'build/dist/<%= pkg.name %>.js',
					'app/scripts/js/app.js',
					'app/components/**/*js',
					'app/scripts/js/directives/*.js',
					'app/scripts/js/services/*.js'
				],
				dest: 'build/dist/<%= pkg.name %>.js'
			},
			unit: {
				src: ['test/unit/js/*'],
				dest: 'test/unit.js'
			}
		},
		copy: {
			app: {
				files: {
					'build/scripts/jqm-overrides.js': 'app/scripts/js/jqm-overrides.js',
					'build/scripts/': 'app/scripts/js/app.js',
					'build/scripts/lib/': 'app/scripts/lib/**',
					'build/styles/lib/': 'app/styles/lib/**',
//					'build/images/': 'app/images/**',
					'build/entityContext.json': 'app/entityContext.json'
				}
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', 'build/dist/<%= pkg.name %>.js'],
				dest: 'build/dist/<%= pkg.name %>.min.js'
			}
		},
		mincss: {
			dist: {
				files: {
					'build/dist/<%= pkg.name %>.min.css': ['build/styles/<%= pkg.name %>.css']
				}
			}
		},
		qunit: {
			files: ['test/**/*.html']
		},
		watch: {
			app: {
				files: [
					"app/scripts/ls/**/*ls",
					"app/views/**/*",
					"test/**/*ls",
					"app/styles/styl/**/*",
					"app/components/**/*"
				],
				tasks: ["default"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-livescript');

	grunt.registerTask('views', 'jade:templates jade:page jade:list');
	grunt.registerTask('scripts', 'livescript:app concat:js concat:jsServices concat:jsFilters concat:ls livescript:dist concat:dist');
	grunt.registerTask('styles', 'stylus:app mincss:dist');
	grunt.registerTask('app', 'views scripts styles copy min');
	grunt.registerTask('tests', 'livescript:test concat:unit');
	grunt.registerTask('default', 'clean lint app tests');
};
