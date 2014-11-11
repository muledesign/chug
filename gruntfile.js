module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['src/assets/css/*.scss'],
        tasks: ['sass']
      },
      mustache_html: {
        files: [
          'src/pages/*.mustache', 
          'src/pages/*.json',
          'src/partials/*.mustache',
          'src/partials/*.json',
          'src/*.mustache'
        ],
        tasks: ['mustache_html']
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/assets/css',
          src: ['*.scss'],
          dest: 'build/assets/css',
          ext: '.css'
        }]
      }
    },
    mustache_html: {
      options: {
        src: 'src',
        dist: 'build',
        type: 'mustache'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-mustache-html');
};