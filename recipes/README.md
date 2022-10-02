# recipes

## Project setup

IMPORTANT: Check the api is live before running the application: https://www.themealdb.com/api.php

Ensure you are in the recipes folder

To install the required packages run:

```
npm install
```

To run the application locally use:

```
npm run serve
```

To run testing use:

```
npm run serve
```

To check linting run:

```
 npm run lint
```


### libraries

Styling: https://getbootstrap.com/docs/4.0/components
Testing: https://v1.test-utils.vuejs.org/installation/#semantic-versioning  
Linting: https://eslint.vuejs.org/

I decided very early on that I was going to keep the libraries to the minimum to show my raw capabilites. To easily create a responsive and visually appealing application I chose to use bootstrap.


### Framework

Although my experience is purely with Angular, I decided to make the application in VUE as that is the framework used for the position. It has been a welcomed challenge to work with a different framework
and I look forward to continuing with VUE (or a different framework) in the future.

### Folder Structure

Since the current application is simple I have decided to implement a simple folder structure. All components are in a components folder, assets (such a logos) are in a seperated folder,
and the testing is seperated at the route of the project. 

If this application was larger, I would create a shared folder which would contain shared components (the shared navigation bar and small reusuable components). The assets folder would
also be further split into logos, translation files, icons, etc.

Every application framework has a different best practice for folder structure. Therefore, I have kept the basic folder structure that is recommended by VUE.


### Handling of application

The key feature of this assignment is the abiliy to work dynamically with different recipes. Therefore, it was vital that route-view was used as well as dynamic router props. 
This allows the user to navigate to a recipe specifc page by either searching for a recipe or by generating a random one. 
Route-view adds a lot of dimention to the application by seemingly changing pages, whilst also allowing the user to navigate back to previous recipes that would have been lost without the url props.

The navigation search bar harnesses the first letter endpoint by calling it after the user has entered the first letter. Thereafter, it will filter the results based on the continued user input.

My feature of choice was to add a carousel that displayed 10 random recipes for the user. The user can navigate through these 10 recipes and select one. Routing them to that recipe specifc page.

### Linting and testing

Eslinting is used to ensure code quality

I have used Jest to perform basic tests on the navigation file



