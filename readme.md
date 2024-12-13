 for making the siblinks use the [] bracket 
appendchild() method add    the Element while  render() method replace the  element
 append =  add
  render =  replace 

 react => 
* React is a JavaScript library for building user interfaces, not a framework
*  it can work independently small portion of our  app  or web  other framework required the   whole app while react can also work the exiting  app 
*  we can  inject the react through the cdn  links anywhere in the app  such as  header , footer , card 

 *  react element is  nothing but a javascript object  , reactElement => object

Q. what is the differece between the react and reacrDOM
A  "React" is a JavaScript library used to build user interfaces, while "ReactDOM" is a separate package that acts as a bridge between React components and the browser's DOM (Document Object Model)  
 
 Functionality:
React focuses on building reusable UI components with state management, while ReactDOM handles the interaction with the Document Object Model (DOM) to render those components on the page. 
Usage:
When developing a React application, you'll primarily use React to define your components, and then use ReactDOM to render them into the HTML document.

Reason for separation:
This separation allows React to be used in different environments beyond the web, like React Native for mobile development, where a different rendering mechanism is needed
                  or
ReactDOM is separated from React to allow React to be platform-agnostic(cross-plateform),
