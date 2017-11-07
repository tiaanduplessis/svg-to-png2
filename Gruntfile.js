/*global require:true*/
'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		nodeunit: {
			files: ['test/*_test.js']
		},
		qunit: {
			files: ['test/phantom/index.html']
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.task.registerTask( 'phantom-unit', 'A task to run the phantom tests', function(){
		var done = this.async();
		var phantomUnit = require( 'phantom-unit' );
		phantomUnit.test( "test/phantom/processing-file_test.js", function(){
			done();
		});
	});

	// Default task.
	grunt.registerTask('default', ['nodeunit', 'phantom-unit']);

};
