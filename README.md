# Ionic Framework Website Starter
Building a static website using Ionic Framework.

Built with [Ionic 4.0.0](https://ionicframework.com/docs/)

# Using Ionic - Building the website
As per Ionic Framework's docs, there are several ways to build a site. 

## Option 1: Using CDN (Content Delivery Network)
We can include ionic.js and ionic.bundle.css in our html using a CDN. That's it.. the below HTML should load an ionic component

```<html>
   <head>
     <script type='text/javascript' src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
     <link rel="stylesheet" href="https://unpkg.com/@ionic/core@4.0.0/css/ionic.bundle.css">  
   </head>
   <body>    
     <h1>Sample H1 HTML Tag</h1>
     <ion-title>Sample Ion Title Component</ion-title>
   </body>
</html>
```

<Screenshot of sample html file with HTML H1 Tag and IonTitle Component>

## Option 2: Without CDN
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

### Screenshot
![screen shot 2019-01-30 at 3 25 07 pm](https://user-images.githubusercontent.com/902972/52030045-8b004800-24db-11e9-8376-ee926d363c3c.png)
