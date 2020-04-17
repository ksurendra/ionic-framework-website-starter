# Ionic Framework Website Starter
Building a static website using Ionic Framework.

Built with [Ionic 5.0.0](https://ionicframework.com/docs/)

# Using Ionic - Building a sample website
As per Ionic Framework's docs, there are several ways to build a site.

## Option 1: Using CDN (Content Delivery Network)
We can include ionic.js and ionic.bundle.css in our html using a CDN. That's it.. the below HTML should load the ionic components

```
<html>
   <head>     
     <link rel="stylesheet" href="https://unpkg.com/@ionic/core@5.0.0/css/ionic.bundle.cs">  
   </head>
   <body>    
     <h1>Sample H1 HTML Tag</h1>
     <ion-title>Sample Ion Title Component</ion-title>

     <!-- Including ionic script -->
     <script src="https://unpkg.com/@ionic/core@5.0.0/dist/ionic.js"></script>
   </body>
</html>
```

### Usgage
To test, just open the .html file from this project in a browser.


## Option 2: Without CDN
While the option to use CDN works best, the only drawback is that for every page load, ionic.js and ionic.css files are fetched from CDN. This can be optimized with cache and other strategies, we cannot avoid calls to an external url and load the files in the browser for the webpage to load.

Ionic 4 uses lazy loading so that user does not load components that are not used in your app or website. So, Ionic 4 is split in many different JS files. We will need to download the dependencies and make them available to the local html file. Here's the process:

### The index.html file:

```
<html>
  <head>
    <script type='text/javascript' src="/core/dist/ionic.js"></script>
    <link rel="stylesheet" href="core/css/ionic.bundle.css">
  </head>
  <body>
    <h1>Sample H1 HTML Tag</h1>
    <ion-title>Sample Ion Title Component</ion-title>
  </body>
</html>
```

### Download the core folder?

Run the below command (you will need npm installed)

`$ npm install @ionic/core`

This will generate `node_modules` folder. Copy the folder from node_modules/@ionic/core to your project.

### The folder structure should be as below:

```
projectFolder
|__core
|  |__css
|  |   |__ionic.bundle.css
|  |__dist
|  |   |__ionic(contains all dependent js files) 
|  |   |__ionic.js
|__index.html
```

Note: Just downloading the `ionic.js` file from CDN https://unpkg.com/@ionic/core@latest/dist/ionic.js will not load the web page. This `ionic.js` has several dependencies other js files which are located under `core/dist/ionic`


# Sample Output
<img width="827" alt="ionic-framework-example-page" src="https://user-images.githubusercontent.com/902972/79573022-9198c200-8083-11ea-8fa6-8f86752dc970.png">

# Resources
-  Ionic framework docs https://ionicframework.com/docs
- Ionic core on NPM https://www.npmjs.com/package/@ionic/core
- 