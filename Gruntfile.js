module.exports = function(grunt) {

    grunt.initConfig({
      concat: { 
            options:{ separator: ';'},
            foo:{ 
                options:{},
                src: ['js/first.js', 'js/second.js'],
                dest: 'js/foo.js'
            },
            bar:{}
       },
      //any_other_name: 'hello' /* Любое произвольное свойство */
    });
    // Загрузка плагинов, на примере "concat".
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Определение задач, default должен быть всегда.
    grunt.registerTask('default', ['concat']);
    
};
