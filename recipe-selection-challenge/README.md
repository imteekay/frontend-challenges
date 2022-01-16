## OVERVIEW

Welcome, and thank you for applying to HelloFresh. For this step of your hiring journey, we have prepared a coding challenge that will help you to demonstrate your technical skills.

The Recipe Selection Page is the core experience of our digital product. Every week millions of users enter this page to select the recipes they'll receive at their homes.

For this challenge, we want you to get familiar with our day-to-day, so we have provided a minimalistic implementation of our Recipe Selection Page, some of the main components from our Design System, and a set of tasks for you.

Please treat this test as if you were part of a team and you have to tackle this feature request; the change would be reviewed by one of your teammates and would go to production.

## INSTRUCTIONS

1. Clone this repository and install the dependencies using `yarn`
2. Create a new branch named dev `git checkout -b dev`
3. Complete the tasks described in this document by applying your solution and committing code.
4. Once you finish, create a pull request to the master branch of this repository.
5. After creating your pull request, please send the link via email to the recruiter you're in touch with.

## RECOMMENDATIONS

- For this challenge, **no data persistence is required**; refreshing the page should reset the recipe selection.
- We provide you a custom hook, **useFetchMenu**, to simulate data fetching from a remote server. It is a simple timeout function that returns static JSON data.
- This repository is based on create-react-app, you can use `yarn start` to run the application.
- **Do not eject** the application.
- Except for `/src/data/hellofreshBox.js`, feel free to **change any file, variable, or value** to achieve your solution.

### OUR DEVELOPMENT VISION

At Hellofresh we value the best experience for our users as well as our engineers when coding. We consider a good development process one that

- considers people's disabilities and limitations
- is well documented and has maintainability in mind
- has a good version control and traceability
- applies the best standards of javascript
- considers today's performance requirements
- is self protected and well tested
- knows the standards of a theme library
- applies functional programming to its best

We hope you can share the same vision as we do, as well as showcase your own expertise and knowledge! As well as have fun coding this test!

## TASKS

### Recipe Selection

Adding and removing recipes from your box is the primary functionality of the Recipe Selection Page. For this task, you'll implement the recipe selection functionality by following the defined acceptance criteria.

#### Acceptance Criteria

- [x] The **selected** property determines the recipe's selection, **0 means not selected**, and any integer above 0 is the **number of times** the recipe is **selected**.
- [x] A customer can **add** a recipe to their box **as many times** as they want, as long as they **don't exceed** the maximum number of **allowed recipes** per box or the recipe's **selection limit.**
- [x] When the **selection limit** of a recipe is reached, the **add button** should be **disabled** for that recipe
- [x] When the **maximum** number of allowed recipes in a box is **reached**, the **add button** for all recipes should be **disabled**.
- [x] When the **minimum** number of selected recipes for that box is **reached**, the copy of all the **add buttons** for the non-selected recipes **changes** from "Add" to "Add Extra Meal".

### Price Calculation & Price Summary

During the selection of recipes, we have to communicate to customers the price of their selection. For this task, you'll implement the price calculation functionality and the price summary user interface.

#### Acceptance Criteria

- [x] The **price summary** should include the price for **every selected recipe on your box**, the number of **times it is selected**, the **shipping price**, and the **total price**.
- [x] Some of our recipes with top-quality ingredients have an extra charge; the total price for a recipe is the base recipe price plus the extra charge by the number of times the recipe is selected: `Total Recipe Price = (Base Recipe Price + Extra Charge) * Selected Times`.
- [x] The **total price** is the **sum** of all the **selected recipes' total price** plus the **shipping price.**
- [x] The price summary **user interface** should follow the specification of the provided **designs**.

## DESIGNS

### Recipe Selection

#### Below minimum selected recipes

This screen shows the state of the user interface for when the customer have less recipes selected than the box minimum.

<img src="./readme-assets/Desktop - below min recipes selected.png" />

#### Minimum selected recipes

This screen shows the state of the user interface for when the customer have selected the minimum number of recipes for this box.

<img src="./readme-assets/Desktop - min recipes selected.png" />

#### Maximum selected recipes

This screen shows the state of the user interface for when the customer have selected the maximum number of recipes for this box.

<img src="./readme-assets/Desktop - max recipes selected.png" />

### Price Summary

#### Price summary open

This screen shows the behavior of the price summary with some recipes selected a single time and a recipe selected more than one time.

<img src="./readme-assets/Desktop - Price Summary.png" />

#### Price summary details

This diagram provides the measurements that you'll need to build the price summary.

<img src="./readme-assets/Desktop - Price Summary Details.png" />

## COMPONENTS

To speed up the time it takes you to solve these tasks we have provided several components that will help you style and structure the user interface.

These components are based on the styled-system specification and rendered using styled-components.

### Box

The Box component serves as a wrapper component for layout related needs. Use Box to set values such as display, width, height, and more. In practice, this component is used as a wrapper around other components to achieve Box Model related styling.

This component uses the following functions from the styled-system: background, border, color, flexbox, layout, position, shadow, and space.

Reference table for styled-system: [https://github.com/styled-system/styled-system/blob/master/docs/table.md](https://github.com/styled-system/styled-system/blob/master/docs/table.md)

We recommend to use long-hand properties, for example:

```js
// Do
<Box borderTopWidth="sm" borderTopColor="border" borderTopStyle="solid" />
// Don't
<Box borderTop="1px solid" borderColor="border" />
```

### Flex

The Flex component behaves the same as the Box component except that it has display: flex set by default.

### List

The List component renders a ul element with list-style-type: none set by default.

This component uses the following functions from styled-system: layout, space.

Reference table for styled-system: [https://github.com/styled-system/styled-system/blob/master/docs/table.md](https://github.com/styled-system/styled-system/blob/master/docs/table.md)

### ListItem

The ListItem component renders a li element, and it's recommended to be used as the children of the List component.

### Text

The Text component is a wrapper component that will apply typography styles to the text inside. It renders a div element as default, but using the ["as" polyphormic property from the styled-components specification](https://styled-components.com/docs/api#as-polymorphic-prop) can render any text element, such as p, h1, span, etc.

### Button

The Button component can use two different variants; primary and secondary, that can be manipulated through the variant property.

This component uses the following functions from styled-system: layout, space.

Reference table for styled-system: [https://github.com/styled-system/styled-system/blob/master/docs/table.md](https://github.com/styled-system/styled-system/blob/master/docs/table.md)

### Grid

Our grid is implemented through the styled-bootstrap-grid [https://github.com/dragma/styled-bootstrap-grid](https://github.com/dragma/styled-bootstrap-grid)

## DATA SCHEMA

### HelloFresh Box

```json
{
  // HelloFresh box identifier
  "id": "5f4e821d531e677602591a9b",
  // Product name
  "productName": "Classic Box",
  // Headline
  "headline": "WEEK OF OCTOBER 12TH'",
  // Minimum recipes for this HelloFresh box
  "min": 3,
  // Maximum recipes for this HelloFresh box
  "max": 8,
  // Base price of every recipe
  "baseRecipePrice": 1798,
  // Shipping price of this HelloFresh box
  "shippingPrice": 1298,
  // Array of recipes that the customer can select for this HelloFresh box
  "recipes": [
    {
      // Recipe identifier
      "id": "5f4d4a7e62fb0224951e7ec4",
      // Name of the recipe
      "name": "Chicken Sausage & Spinach Ravioli",
      // Recipe slug
      "slug": "chicken-sausage-spinach-ravioli",
      // Recipe headline
      "headline": "with Tomato & Lemon",
      // Recipe image
      "image": "https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg",
      // Indicates the times this recipe was selected, this is used to perform the recipe selection
      "selected": 1,
      // Maximum number of times this recipe can be selected
      "selectionLimit": 1,
      // Extra charge for this recipe
      "extraCharge": 0,
      // Servings
      "yields": 2
    }
  ]
}
```

## GLOSSARY

**HelloFresh Box:** the weekly physical box that arrives at your door containing the recipes that you have previously selected. Boxes have boundaries around the minimum and maximum recipes that you can receive.

**Recipe:** a combination of ingredients that are cooked together create a HelloFresh recipe; a box can have multiple recipes and multiple items of the same recipe. This way, our customers can cook more portions of the same recipe in case they're throwing a dinner party!

**Recipe Selection:** the action of adding or removing a recipe from your box based on the configuration from your box and recipe, such as box selection boundaries and recipe selection limit.
