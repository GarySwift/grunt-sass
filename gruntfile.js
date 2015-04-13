module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.initConfig( {
		coffee: {
			compile: {
				files: {
					'_/components/js/coffee.js':'_/components/coffee/*.coffee'
				}//files
			}//compile
		},//coffee		
		uglify: {
			my_target: {
				files: {
					'_/js/script.js': ['_/components/js/*.js']
				}//files
			}//my-target
		},//uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					force: true
				}//options
			}//dev
		},//compass
		watch: {
			options: { livereload: true },
			coffee: {
				files: ['_/components/coffee/*.coffee'],
				tasks: ['coffee']
			},//coffee
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']	
			},//scripts
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			},//sass
			html: {
				files: ['*.html']
			}//html	
		}//watch

	})//initConfig
	grunt.registerTask('default', ['coffee', 'uglify', 'compass', 'watch']);
}//exports