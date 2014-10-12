module.exports = {

  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],

    atpl: [ 'src/app/**/*.tpl.html', 'src/app/**/*.jade' ],
    ctpl: [ 'src/common/**/*.tpl.html', 'src/common/**/*.jade'],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  // Add stuff you bower to here to include it in index.html
  vendor_files: {
    js: [
      //'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular/angular.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/ui-utils.js'
    ],
    css: [],
    assets: []
  },
};
