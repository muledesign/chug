module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes; perform relevant task
    watch: {
      sass: {
        files: ['src/assets/css/*.scss'],
        tasks: ['sass']
      },
      mustatic: {
        files: [
          'src/pages/*.html', 
          'src/pages/*.json',
          'src/partials/*.html',
          'src/partials/*.json',
          'src/*.html'
        ],
        tasks: ['mustatic']
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
        options: {
          style: 'compressed'
        },
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
    mustatic: {
      options: {
        src: 'src',
        dest: 'build'
      },
      prod: {
        globals: {
          lang: 'en',
          charset: 'utf-8'
        }
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
  grunt.loadNpmTasks('dbushell-grunt-mustatic');
  grunt.loadNpmTasks('grunt-contrib-copy');
};