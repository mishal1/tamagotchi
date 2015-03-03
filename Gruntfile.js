module.exports = function(grunt){
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  jshint: {
    options: {
      node: true, 
      jasmine: true
    },
    all: [
    'Gruntfile.js', 
    './src/**/*.js',
    './spec/**/*.js'
    ]
  },
  jasmine_node: {
    options: {
      forceExit: true, 
    }, 
    all: ['test/unitTests/']
  },
  mocha_casperjs: {
    options: {
      timeout: 5000,
      color: false
    },
    files: {
      src: ['test/acceptanceTests/*.js']
    }
  },
  express: {
    options:{},
    dev: {
      options: {
        script: './server.js'
      }
    }
  },
  watch: {
    files: [ 
    './src/**/*.js',
    './test/**/*.js',
    './public/js/*.js'
    ], 
    tasks: ['jasmine_node', 'express', 'mocha_casperjs', 'jshint']
  }
});

grunt.loadNpmTasks('grunt-mocha-casperjs');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-jasmine-node');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default',['express','mocha_casperjs','jasmine_node' ]);
grunt.registerTask('jasmine', ['jasmine_node']);

};