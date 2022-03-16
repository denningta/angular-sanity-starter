# Angular-Sanity starter project
  This is a starter project with Angular, Sanity, and Tailwindcss meant to get Headless CMS websites up and running quickly.  
  
  Sanity has been modified from its default configuration to a more general and usable format.

# Getting Started

## 1. Install Dependencies
  Run `npm install` in the root directory to install Angular depenedcies.
  
  Run `npm install` in the `sanity` directory to install Sanity dependencies.

## 2. Set up Sanity
  Sign up or Log in to [Sanity](https://www.sanity.io/) and create a new project.

  Add the Sanity Project ID to `projectId` in `sanity/sanity.json`.

  ```json
    "api": {
      "projectId": "YOUR_PROJECT_ID",
      "dataset": "production"
    },
  ```

  Add the Sanity Project ID to `projectId` in `src/app/services/queries.groq.ts`
  ```ts
  export const client = sanityClient({
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  });
  ```

  Add a CORS origin for the Angular development server to your Sanity project in the [API tab](https://www.sanity.io/manage/personal/project/b74i10k9/api).  Leave the "Allow credentials" checkbox unchecked.

  Run `sanity start` inside the sanity folder to start the sanity development server.

  Navigate to `http://localhost:3333` for the Sanity UI.

  See the [Sanity Documentation](https://www.sanity.io/docs/getting-started-with-sanity-cli) for more information.

## 3. Angular Development server

Run `ng serve` from the root directory for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If there are issues with styling it is likely due to tailwindcss importing issues.  Check the `tailwind.config.js` for the directories it is watching:

```js
module.exports = {
  content: [
    "src/**/*.{html,ts}",
  ],
```


## Type Synching from Sanity to Angular

  This project uses [Sanity Codegen](https://github.com/ricokahler/sanity-codegen) to create an interface file for type checking based on the Sanity schema.

  Run `npx sanity-codegen` in the `sanity` directory.  This will create a global interface file in `src/app/interfaces`.

  Custom types can be created from this interface by using typescript's `Omit` and `Pick` utility types:

  ```ts
  // Refer to Typescript's utility types for useful type helpers:
  // https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
  //
  // And also intersections:
  // https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
  type QueryResult = Array<
    Omit<Pick<Schema.BlogPost, 'title'>, 'author'> & {
      author: Schema.Author;
    }
  >;
  ```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
