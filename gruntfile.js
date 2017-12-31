module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'static/css/main.css': 'src/styles/main.scss'
				}
			}
		},
		watch: {
			css: {
			  files: ['src/styles/*.scss'],
			  tasks: ['sass'],
			  options: {
				spawn: false,
			  },
			},
		  },
	});
	
	grunt.registerTask('default', ['sass']);
}