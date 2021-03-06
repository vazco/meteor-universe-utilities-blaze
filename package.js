Package.describe({
    name: 'universe:utilities-blaze',
    version: '1.5.2',
    // Brief, one-line summary of the package.
    summary: 'Universe Utilities for blaze, awesome templates helpers',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/vazco/meteor-universe-utilities-blaze',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');
    api.use(['templating', 'universe:utilities@2.0.0'], 'client');
    api.use([
        'underscore'
    ]);
    api.addFiles('spacebars-helpers.js', 'client');
    api.addFiles('UniUtilsBlaze.js', 'client');
});
