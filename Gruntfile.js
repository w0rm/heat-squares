/**
 * Gruntfile
 *
 * More information on using Grunt to work with static assets:
 * http://gruntjs.com/configuring-tasks
 */


var path = require('path')
  , publicPath = path.join(__dirname, '/public')
  , jsPath = path.join(publicPath, 'js')


module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  , compass: {
      compile: {
        options: { config: 'assets/styles/config.rb' }
      }
    , watch: {
        options: { config: 'assets/styles/config.rb', watch: true }
      }
    }
  , connect: {
      server: {
        options: {
          port: 8888
        , hostname: '*'
        , base: publicPath
        }
      }
    }
  , clean: ['node_modules']
  , concurrent: {
      watch: ['server', 'compass:watch']
    , options: {
        logConcurrentOutput: true
      }
    }
  })

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-concurrent')

  // Register tasks
  grunt.registerTask('server', ['connect:server:keepalive'])
  grunt.registerTask('compile', ['compass:compile'])
  grunt.registerTask('watch', ['compass:watch'])
  grunt.registerTask('default', ['concurrent:watch'])

}
