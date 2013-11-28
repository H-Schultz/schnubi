/* jshint node: true */

module.exports = function (grunt) {

    "use strict";

    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['js/*.js']
            }
        },

        concat: {
            bootstrap: {
                src: [
                    'js/transition.js',
                    'js/alert.js',
                    'js/button.js',
                    'js/carousel.js',
                    'js/collapse.js',
                    'js/dropdown.js',
                    'js/modal.js',
                    'js/tooltip.js',
                    'js/popover.js',
                    'js/scrollspy.js',
                    'js/tab.js',
                    'js/affix.js'
                ],
                dest: 'release/js/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'min'
            },
            bootstrap: {
                src: ['<%= concat.bootstrap.dest %>'],
                dest: 'release/js/<%= pkg.name %>.min.js'
            }
        },

        copy: {
            fonts: {
                expand: true,
                src: ["fonts/*"],
                dest: 'dist/'
            }
        },

        less: {
            min: {
                options: {
                    compress: true
                },
                src: ['less/bootstrap.less'],
                dest: 'release/css/<%= pkg.name %>.min.css'
            }
        },

        connect: {
            server: {
                options: {
                    port: 8020,
                    base: '.'
                }
            }
        },

        watch: {
            options: {
                forever: true,
                livereload: true,
                atBegin: true
            },
            scripts: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ["less/**/*.less"],
                tasks: ['less']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var changedFiles = Object.create(null);
    var onChange = grunt.util._.debounce(function() {
        grunt.config('jshint.all.src', Object.keys(changedFiles));
        changedFiles = Object.create(null);
    }, 200);
    grunt.event.on('watch', function(action, filepath) {
        changedFiles[filepath] = action;
        onChange();
    });

    grunt.registerTask('default', [
        'connect',
        'jshint',
        'concat',
        'uglify',
        'watch'
    ]);

};
