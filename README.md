Simple React & JSS Tutorial
===========================

![alt text](https://media.giphy.com/media/1o1rLRVyr3pFoPgnJR/giphy.gif "I gotta step this up")

This tutorial runs through how to set up the `react-jss` package. It also shows how to create a simple theme and Button component with prop-based styling.

Quick Start
-----------

### Dependencies

- [nvm](https://github.com/creationix/nvm)

### Installation

1. Clone this repo
2. Navigate into repo folder `cd simple-react-jss`
3. Run the following commands

        nvm use
        npm i
        npm start

Tutorial Steps
--------------

This tutorial is separated into three different steps. The master branch only includes the setup for a simple Webpack server, along with Babel and ESLint configurations.

Each subsequent step lives in it's own branch:

### Step 1 - Add simple Button component, styled in JSS

1. Install JSS using `npm i -s react-jss`
2. Create new component `<Button />`
3. Add basic styles to `<Button />` using a JSS object
4. Place `<Button />` in your app.

[View the completed step](https://github.com/lesleychard/simple-react-jss/pull/1)

### Step 2 - Theming and advanced Button styles

1. Create a theme which includes styling for borders, typography and colours (palette).
2. Wrap app in the `<ThemeProvider />` HOC and pass in the custom theme object.
3. Style `<Button />` using the theme.

[View the completed step](https://github.com/lesleychard/simple-react-jss/pull/2)

### Step 3 - Props-based styling

1. Add new props `color` (one of `'primary'`, `'secondary'`), and `size` (number) to `<Button />`.
2. Create new classes for primary and secondary `<Button />`s.
3. Add conditional styling to `<Button />`.
4. Refactor `font.size` in styling to `fontSize` due to [this known issue](https://github.com/cssinjs/jss/issues/682).
5. Use prop function to programatically determine `<Button />` `fontSize`.
6. Add new `<Button />` styles to your app.

[View the completed step](https://github.com/lesleychard/simple-react-jss/pull/3)