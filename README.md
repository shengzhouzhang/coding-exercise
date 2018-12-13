# Seek Coding Challenge

## Challenge Description

Please see `Software Engineer Code Challenge.pdf` on the root folder.

## Solution

The program is written in `Node.js` version `v10.14.1`. Source code can be found in folder `src`.

#### Installation

Run `yarn install`

#### Unit Tests

Run `yarn test` for unit testing.

Unit tests are in `src` folder and named with `.spec.js` next to the target file.

#### Product Prices and Pricing Rules

Product prices and customer special pricing rules are configurable in `src/config` folder with `json` format.

Product prices are loaded in `src/products/Products.js` and pricing rules are loaded in `src/PricingRules.js`

#### Code Structure

There is not a **_main_** js file in the solution. Please look into the `Checkout.spec.js` for the top level examples.

```
src
-- config             // config files for product and pricing rules
-- customers          // things belong to customers, like pricing rule modal
-- products           // things belong to products, like product price modal
-- utils              // util functions
-- Checkout.js        // the top level checkout interface
-- Checkout.spec.js   // unit tests and examples
```

#### Design

See `design.png`:

![alt text](./design.png 'design of models')
