'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        src: 'assets/scss/style.scss',
        dest: 'assets/css/style.css'
      }
    },
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      css: {
        files: '**/*.css',
        tasks: ['cssmin'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['index.html', '**/*.css'],
        options: {
          livereload: true
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-node-sass');
  grunt.registerTask('dev', ['sass', 'watch']);
};