module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes; perform relevant task
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
      },
      copy: {
        files: [
          'src/assets/img/*',
          'src/assets/fonts/*',
          'src/assets/js/*'
        ],
        tasks: ['copy']
      }
    },

    // Compile Sass into CSS
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

    // Compile mustache templates into flat HTML
    mustache_html: {
      options: {
        src: 'src',
        dist: 'build',
        type: 'mustache'
      }
    },

    // Copy images, fonts, and javascript from src to build
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/assets/img',
            src: ['**', '**/*'],
            dest: 'build/assets/img/'
          },
          {
            expand: true,
            cwd: 'src/assets/fonts',
            src: ['**', '**/*'],
            dest: 'build/assets/fonts/'
          },
          {
            expand: true,
            cwd: 'src/assets/js',
            src: ['**', '**/*'],
            dest: 'build/assets/js/'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-mustache-html');
  grunt.loadNpmTasks('grunt-contrib-copy');
};