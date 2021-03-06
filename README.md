# Seek Coding Challenge

## Challenge Description

Please see `Software Engineer Code Challenge.pdf` on the root folder.

## Solution

The program is written in `Node.js` version `v10.14.1`. Source code can be found in folder `src`.

### Installation

Run `yarn install`

It might need yarn version `1.12.3`. See https://yarnpkg.com/en/ to install yarn.

### Unit Tests

Run `yarn test` for unit testing.

Unit test files are in `src` folder and named with `.spec.js` next to the target file.

Alternately, unit tests can be run in docker, in case having difficulties to set up local environment.

`docker build -t challenge .`
`docker run -it challenge test`

### Run Program

This program does **_not_** contain a **_main_** js file. The top level examples are in `Checkout.spec.js` and run with unit testing.

### Product Prices and Pricing Rules

Product prices and customer special pricing rules are configurable in `src/config` folder with `json` format.

Product prices are loaded in `src/products/Products.js` and pricing rules are loaded in `src/PricingRules.js`

### Code Structure

Please look into the `Checkout.spec.js` for the top level examples.

```
src
-- config             // config files for product and pricing rules
-- customers          // things belong to customers, like pricing rule modal
-- products           // things belong to products, like product price modal
-- utils              // util functions
-- Checkout.js        // the top level checkout interface
-- Checkout.spec.js   // unit tests and examples
```

### Design

See `design.png`:

![alt text](./design.png 'design of models')
