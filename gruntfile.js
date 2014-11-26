var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes; perform relevant task
    watch: {
      sass: {
        files: ['assets/scss/**'],
        tasks: ['sass']
      },
      mustatic: {
        files: [
          'templates/pages/*.mustache', 
          'templates/pages/*.json',
          'templates/partials/*.mustache',
          'templates/partials/*.json',
          'templates/*.mustache',
          'templates/*.json'
        ],
        tasks: ['mustatic']
      }
    },

    // Compile Sass into CSS
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'assets/scss',
          src: ['*.scss'],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },

    // Compile mustache templates into flat HTML
    mustatic: {
      options: {
        ext: 'mustache',
        src: 'templates',
        dest: '.'
      },
      prod: {
        globals: {
          lang: 'en',
          charset: 'utf-8'
        }
      }
    }
  });

  // Generate directory structure
  grunt.registerTask("new", function() {
    createTemplatesDir();
    createAssetsDir();

    function createTemplatesDir() {
      fs.mkdirSync("templates");
      fs.mkdirSync("templates/partials");
      fs.mkdirSync("templates/pages");

      fs.writeFileSync("templates/base.mustache", "{{>content}}");
    }

    function createAssetsDir() {    
      fs.mkdirSync("assets");
      fs.mkdirSync("assets/scss");
      fs.mkdirSync("assets/css");
      fs.mkdirSync("assets/img");
      fs.mkdirSync("assets/js");

      fs.writeFileSync("assets/scss/style.scss", "");
    }
  });

  grunt.registerTask("compile", ['sass', 'mustatic']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('dbushell-grunt-mustatic');
};