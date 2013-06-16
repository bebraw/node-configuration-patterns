# Package Configuration with Environment Variables

This example uses [parse-env](https://npmjs.org/package/parse-env) to provide support for environment variables for the configuration.

Remember to run `npm install` before executing './index.js'.

Copy `template.config.js` as `config.js` to override the default configuration. You may also use environment variables to override it. Ie. a configuration mapped as aws.accessKeyId maps as AWS_ACCESS_KEY_ID.

## Advantages

* Simple to use although slightly more complicated than module
* Works out of the box given it's just a Node.js package
* Clearly encapsulated
* Possible to extend easily
* Possible to document using comments
* Works with Heroku and environments relying on environment variables

## Disadvantages

* Too complex for simple cases?
* Requires an external dependency
