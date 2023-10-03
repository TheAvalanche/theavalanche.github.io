

module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Minify Image
        imagemin: {
            dynamic: {
                files:[{
                    expand: true,
                    cwd: './img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: './img'
                }]
            }
        },


        // Watch Task
        watch: {
            files: ['./sass/style.scss'],
            tasks: ['sass']
        },

        //SASS Task
        sass: {
            dist: { 
                files: {
                    './css/style.css':'./sass/style.scss'
                }
            }
        },

        //Browser Sync Task
        browserSync: {
            bsFiles: {
                src : [
                    './css/style.css',
                    './js/main.js',
                    './home.html',
                    './about.html',
                    './services.html',
                    './portfolio.html',
                    './blog.html',
                    './contact.html',
                    './elements.html',
                ]
            },
            options: {
                watchTask: true,
                server: './'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync','watch']);
}
