module.exports = function( grunt ) {
  "use strict";

  // autoload modules from package.json
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({

    compass: {
      default: {
        options: {
        outputStyle: "expanded",
        environment: "production",
        sassDir: "res/scss/",
        cssDir: "res/styles/",
        fontsDir: "res/fonts/",
        imagesDir: "res/images/"
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'res/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'res/images/'
        }]
      }
    },
    imageoptim: {
      dynamic: {
        options: {
          jpegMini: true,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['res/images/']
      }
    },
    watch: {
      js: {
        options: {
          livereload: true
        },
        files: "res/scripts/**/*.js",
      },
      sass: {
        options: {
          livereload: true
        },
        files: "res/scss/**/*.{scss,sass}",
        tasks: ["compass:default"]
      }
    }

  });

  // task registration
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('images', ['imagemin:dynamic', 'imageoptim:dynamic']);

};




