-->npm scripts: This are industry standards that are followed 
across to write shorter form of commands
-->npm commands are added in package.json
-->To run application we use command npm run scriptname

-------------------------------------------------------------------------

-->The whole philosophy of react is to keep html and js code in a single file
-->JSX : Javascript Extension
-->It allow use to write html like structure in js
-->JSX is developed to make react development easy
-->React application can be developed even without JSX
-->JSX will create React Elements

-->JSX code is not understand by JS Engine bundler will transpile the code
-->Transpilation is a process of converting code into machine understandable code like js
-->Parcel gives the responsibility to the babel node package to transpile the JSX code to React element
    JSX --> React Element() --> JS Object --> HTML Element

-->When adding attributes to JSX element we follow camelCase
-->Multiline JSX should be kept in braces

Extensions 
    Prettier Formatter
    Bracket Pair colorizer
    Better Comments

----------------------------------------------------------------------------------------

********************************React Component**********************************

Component is a smallest business unit. 
Everything in react is a Component.
Components are 2 types
    -->Class Based Components OLD (based on classes)
    -->Functional Based Components NEW (based on functions)

Note : 
Functional Component is simple JS function
Components Names are started with the Captial Letter it's a  convention
Components have some logic and returns JSX

Different ways of writting functional components. when we have single line of code

const j1 = () => {
    return "foo";
}

const j2 = () => (
    <h1>This is functional Components</h1>
)

-->We should render the react components in Element syntax only.
Directly using won't work. 
-->Babel will identify it as an tag
-->Nested JSX inside the Component
-->Each React component should have JSX element can't have siblings.only 1 parent element.
-->Component Composition is using component inside other component

-->Inside {} of JSX we can write any js code. which gives a power of dynamic rendering of element 
   of applications

-->React Component in React Component
.,-->React Element in React Component (using {})
-->React Element in React Element (using {})
-->React Component inside an element (usign {})

-->JSX also takes care of sanitizing the code
-->We can call the components multiple times in an app

Different ways of calling an components
--><Title />
--><Title></Title>
-->{ Title() }

--------------------------Props----------------------------

-->We should pass as objects to the react component for styles
-->Props are combined and passed as an object to the component
-->At the end they will be passed as an argument to the function
-->Generally this props are destructured on the fly or within the 
function as well
-->Simple values are passed as an string and complex objects are 
passed like an js object
Config Driven UI : Based on the data the UI will be modified
