# piksil-app

## Setup

To get the Piksil front-end up and running on your machine, make sure you have the following npm packages installed: 

```
$ npm install -g browserify
$ npm install reactify
```

Make your bundle by running the following:

```
browserify -t [ reactify ] js/main.js -o js/bundle.js
```

Last, start the http-server by running ```http-server -c-1```
