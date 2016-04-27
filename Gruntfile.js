module.exports = function(grunt) { // The wrapper function : this is the basic format for each grunt file 

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

/*        copy: {
              main: {
                expand: true,
                cwd: 'src',
                src: '**',
                dest: 'build/',
              }
        },*/
        watch: {

            script: {
                files: ['src/js/app.js'],
                tasks: ['jshint', 'uglify']
            },
            css: {
                files: ['src/css/style.css'],
                tasks: ['cssmin']
            }

        },

        jshint: {
            file: ['src/js/app.js']
        },

        uglify: {
            my_target: {
                files: {
                    'build/js/app.min.js': ['src/js/app.js']
                }
            }
        },

        cssmin: {
            my_target: {
                files: {
                  'build/css/style.min.css': ['src/css/style.css']
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

};
