module.exports = function(grunt) {

  //load the task
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-bower-install-simple");
  grunt.loadNpmTasks("grunt-ts");


    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome', 'Firefox']

      },
      continuous: {
        singleRun: true,
        browsers: ['PhantomJS']
      },
      dev: {
        reporters: 'progress'
      }
    },


    "bower-install-simple": {
        options: {
            color: true,
            directory: "bower_components"
        },
        "prod": {
            options: {
                production: true
            }
        }
    },

    bower: {
        install: {
            dest: 'lib'   // 'bower_components' -> 'lib/bower-installs'
        }
    },


    copy: {
      angular: {
          files: [
              // angular
              // copy all angular-files to /lib/angular/ folder (flattens results to a single level)
              {
                  expand: true,
                  flatten: true,
                  //src: ['bower_components/angular*/**/angular*.min.js'], // copy only .min-files
                  src: [                                                   // js and .map files (for dev)
                      'bower_components/angular*/**/angular*.js',
                      'bower_components/angular*/**/angular*.js.map'
                  ],
                  dest: 'lib/angular/',
                  filter: 'isFile'
              }
          ]
      },
      jquery: {
          files: [
              {
                  expand: true,
                  flatten: true,
                  //src: ['bower_components/dist/*.min.js'],               // copy only .min-files
                  src: [                                                   // js and .map files (for dev)
                      'bower_components/jquery/dist/jquery*.js',
                      'bower_components/jquery/dist/jquery*.js.map'
                  ],
                  dest: 'lib/',
                  filter: 'isFile'
              }
          ]
      }

    },

    uglify: {
      dist: {
          files: {
              'lib/ui-bootstrap-tpls.min.js': 'lib/ui-bootstrap-tpls.js'
          },
          options: {
              mangle: true
          }
      }
    },

    clean: {    // clean stuff that will be overloaded by 'deps' task
       bower : [
           "bower_components"
       ],
       bower_install: [
           //"lib/bower-installs"
           "lib"
       ],
       lib_files: [
           "lib/angular",
           "lib/jquery*.js",
           "lib/ui-bootstrap-tpls*.js"
       ]
    },

    ts: {

      typescript: { // current target
          src: ["src/**/*.ts"], // will compile ts files..
          html: ["src/directives/templates/*.html"],
          reference: "./src/reference.ts", // will generate reference file (for ts)
          //out: "js/out.js",
          watch: 'js'               // will watch the directory for changes and rerun the current target

          //options: {
          //}

      }
    }

  });

  grunt.registerTask('deps', [
      'clean:bower',
      'clean:bower_install',       // clean 'lib'
      'bower-install-simple:prod', // download into 'bower_components'
      'bower:install',             // 'bower_components' ~> lib/
      'clean:bower']
  );

/*
  grunt.registerTask('deps', [
                                'clean:bower'
                                ,'clean:bower_install'
                                ,'clean:lib_files'

                                ,'bower-install-simple:prod'    // download the deps to 'bower_components' based on 'bower.json' (comment it if slow)

                                ,'copy:angular'      // 'bower_components' -> lib/angular/*
                                ,'copy:jquery'       // 'bower_components' -> lib/*
                                ,'copy:jquery_ui'    // 'bower_components' -> lib/*

                                ,'bower:install'     // 'bower_components' ~> lib/bower-installs
                                ,'copy:ui_bootstrap' // lib/bower-installs -> lib

                                ,'uglify:dist'       // lib -> lib (uglify the rest)

                                ,'clean:bower' // cleaning temporary bower-installs afterwords
                             ]);
*/

    grunt.registerTask("typescript", ["ts:typescript"]); // grunt default


};