# Package Configuration with Environment Variables

Note that in this example the environment variable names are inferred based on a configuration template. This adds some complexity but makes the configuration definition more compact. This functionality might belong into a module of its own even.

## Advantages

* Simple to use although slightly more complicated than module
* Works out of the box given it's just a Node.js package
* Clearly encapsulated
* Possible to extend easily
* Possible to document using comments
* Works with Heroku and environments relying on environment variables

## Disadvantages

* Too complex for simple cases?
