
module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            dev: {
                options: {
                    dumpLineNumbers: true
                },
                files: [
                    { src: 'less/<%= pkg.name %>.less', dest: 'release/css/<%= pkg.name %>.css' }
                ]
            },
            min: {
                options: {
                    compress: true,
                    dumpLineNumbers: false
                },
                files: [
                    { src: 'less/<%= pkg.name %>.less', dest: 'release/css/<%= pkg.name %>.min.css' }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    hostname: '*',
                    port: 3000,
                    base: '.',
                    open: 'http://127.0.0.1:3000/release/index.html'
                }
            }
        },

        watch: {
            options: {
                forever: true,
                livereload: true,
                atBegin: true
            },
            css: {
                files: ["less/**/*.less"],
                tasks: ['less:dev','less:min']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'connect', 'watch' ]);

};
