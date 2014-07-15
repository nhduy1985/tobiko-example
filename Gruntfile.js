'use strict';

module.exports = function(grunt) {
	var path = require('path'),
		config = grunt.file.readJSON('tobiko/tobiko.json');
	// load local tasks
	grunt.loadTasks('tobiko/tasks');
	// display execution time of grunt tasks
	require('time-grunt')(grunt);
	// load all grunt configs
	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'tobiko/config'),
		config: config
	});
	grunt.config.set('gh-pages', {
		prod: {
			options: {
				base: '<%= buildPath %>',
			},
			src: ['**/*']
		}
	});
	grunt.config.set('copy', {
		build: {
			files: [
				{expand: true, cwd: 'sass', src: 'assets/**/*', dest: '<%= buildPath %>/css/'}
			]
		}
	});
}