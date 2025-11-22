1st Epsiode of the React Course

--> React is js library. It is used to build large scale web applications
--> Using CDN links we can get the React and ReactDOM into the application
--> CDN is Content Delivary Network. It hosts the content around the globe
    serves the user from the nearest location.
    i)Generally static files like js/css/html/images are kept in it
--> React CDN link imports the React core code into the app
--> React DOM CDN link imports the React DOM related code into the app 
--> Local VS Prod CDN links
    1)Slow 
    2)Large File Size
    3)Detailed error messages
    4)Used for local/learning purpose

*********************************CODE SNIPPET****************************

const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

*************************************************************************

--> React.createElement() it gives a ReactElement (Object type) not html
--> React.createElement() have multiple overloads   
--> props : It is combination of attributes and children
--> ReactDOM.createRoot() it creates the root element for the react app
    every operation is happend inside the root related to the react app
--> root.render() it basically takes the heading and converts to html and 
    render into that root element
--> If the root element having any child it will be replaced by react.

Note : 
i)The order in which we import js is critical. It might break the application as well
ii)React application only works under that root element. remaining app is not effected by react
iii)It can work in small portion of the application as well. unlike angular
iv)In other frameworks/libraries we must create whole app in it. but react can be injected into 
any existing applications