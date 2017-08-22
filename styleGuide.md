# **Project style guide**
This document is a reference for our developers regarding the styles and practices we are following in building out this project. It is a changing document, reffer back to it frequently as protocols may change. 

To suggest an ammendment please open an issue on [the projects GitHub page](https://github.com/maftoun95/helenIC), make the appropriate changes, and submit a pull request.

### Styling
We are styling this site using CSS modules. Each route has its own CSS file where all the classes used in building our components are defined. Each component will import the appropriate CSS file at the top. 
Ex: `import './homepage.css';`
[create-react-app docs regarding css modules](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet)

### The Container Component pattern
We are using The Container Component pattern. What this means functionally is that whenever there is a component that needs to fetch data, it will have a coresponding container component that will handle the actual data fetching and pass the results to the main component.
We are building containers only where we need to ping a server.
[A simple primer on The Container Component pattern](https://medium.com/@learnreact/container-components-c0e67432e005)