# Bell Chiropractic & Pain Managment

Built by K. Michael Milligan, April 2020

Structured from Gatsby Starter:
[gatsby-material-ui-business-starter](https://bluepeter.github.io/gatsby-material-ui-business-starter/)

- [Material UI](https://material-ui.com/): the world's most popular Material
  Design React.js framework
- [Stylus for CSS](http://stylus-lang.com/)
- [Material Design icons](https://materialdesignicons.com/)

Info sourced from Original Site for Rebuild (https://www.bellchirostl.com/, originally build using Wix.com. Wix. Lol.) and [momedcanco.com/](https://www.momedcanco.com/)

### Styling

You can use CSS in two different ways:

- Edit the Stylus file
  [`style.styl`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/css/style.styl)
  directly to add classes/etc. You can then adjust components to use these
  classes.
- Use Material UI's `withStyles()` to override and dynamically set classes from
  within each component. For an example of how to do this, please see
  [`HomeFeatures.js`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/components/HomeFeatures.js),
  including getting and using theme colors.

You can adjust the theme palette colors in
[`getPageContext.js`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/utils/getPageContext.js).
