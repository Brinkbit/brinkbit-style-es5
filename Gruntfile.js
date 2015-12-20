'use strict';

module.exports = function initGrunt( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    grunt.initConfig({

        eslint: {
            target: [ 'src/**/*.js', 'test/**/*.js', 'Gruntfile.js' ]
        }

    });
};
