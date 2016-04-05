# features-list [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/features-list.svg?branch=master)](https://travis-ci.org/Pearson-Higher-Ed/features-list) [![Coverage Status](https://coveralls.io/repos/Pearson-Higher-Ed/features-list/badge.svg?branch=master&service=github)](https://coveralls.io/github/Pearson-Higher-Ed/features-list?branch=master)

**Note:** This is still in experimental stage.

## How to Consume in an Application

Assumption: You have Node v4+ and npm 2+ installed.

	> npm i --save @pearson-components/features-list

### Script Include (Preferred)

The javascript bundle is available in /node_modules/@pearson-components/features-list/build/dist.features-list.js.

Add the following script include to your web page:

```html
	<script src="path/to/dist.features-list.js"></script>
```

```js
var features = new $featureComponent().init(options, data, element);
```

### CommonJS

This method requires a web bundler, such as webpack or browserify.

```js
var features = require('@pearson-components/features-list');
```

## How to Develop

### Toolchain

- [Node.js](http://nodejs.org) `v4+`
- [webpack](https://webpack.github.io/)

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) 
to manage them.

### Demo

The following npm script will build the component in memory, fire up a webpack dev server at localhost:8080/demo, and 
hot reload any saved changes to the source without having to refresh the browser.

	npm run dev

### Test

The following npm script will execute any unit tests.

	npm test
	
## Licence

Copyright 2015 Pearson Education. This software is published under the [MIT licence](http://opensource.org/licenses/MIT).
