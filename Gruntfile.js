
module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            min: {
                options: {
                    compress: true,
                    dumpLineNumbers: false
                },
                files: [
                    { src: 'less/style.less', dest: 'page/css/style.min.css' }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    hostname: '*',
                    port: 3030,
                    base: '.',
                    open: 'http://127.0.0.1:3030/page/index.html'
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
                tasks: ['less:min']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [ 'less', 'connect', 'watch' ]);

};
