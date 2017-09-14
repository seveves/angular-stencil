exports.config = {
  bundles: [
    { components: ['fwt-slider'] }
  ],
  buildDir: 'assets/build',
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
