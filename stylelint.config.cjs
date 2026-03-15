module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
  },
  overrides: [
    {
      files: ['src/pages/FilteredMoviesPage/Filter/RatingSlider/rangeSlider.css'],
      rules: {
        'selector-class-pattern': null,
      },
    },
  ],
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
};
