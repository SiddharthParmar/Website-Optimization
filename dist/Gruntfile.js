// http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
module.exports = function(grunt) {
grunt.initConfig({
  imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: '/Users/Sidd/Desktop/Last2/views/images',
          src: ['**/*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: '/Users/Sidd/Desktop/Last2/views/images/comp',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: '/Users/Sidd/Desktop/Last2/views/images',
          src: ['**/*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: '/Users/Sidd/Desktop/Last2/views/images/comp',
          ext: '.jpg'
        }
      ]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');

grunt.registerTask('default', ['imagemin']);

};