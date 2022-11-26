module.exports = function(grunt)
{
    // Config
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            }
        },

        uglify: {
            build:{
                files:[{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        },

        connect:{
            'static': {
                options:{
                    hostname: 'localhost'
                }
            }
        },
        
        watch:{
            files: ["js/**/*.js", "js/*.js"],
            tasks:["concat", "connect:static"],
            options: {
                spawn: false
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('serve', ['concat', 'connect:static', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify']);
};