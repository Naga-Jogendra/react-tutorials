****Making an App Ready for Production****

-->Minificaiton
-->Bundling
-->Chunking
-->Optimaztion
-->Removing commented codes

npm
-->Public repository that maintine all the js packages/libraries
-->It provide a tool called npm cli which helps in managing packages and installing
-->npm manages packages of the app
-->We can initilize npm in app using npm init command
-->Sometimes this packages are refered to as dependencies

package.json 
    *It is configuration of the project with npm.
    *It keep track of all packages installed in the project along with version.

Bundler
    *It bundles the files/minify/chunk remove unecassary code to make it production ready
    *Popular bundlers are vite,webpack,parcel etc
    *create react app uses bundler behind scences

-->To install any dependencies of an application we use npm install command.
-->A Dependency is library on which our app is dependent on.There are two types of 
   dependencies one is dev and normal.
-->Dev dependencies are dependencies that are required only for development phase
-->Normal dependencies are dependencies that are used in production and development phase
-->To install node package as dev dependency use the following command npm install -D package_name
-->When installing it will create node_module folder and keep the packages related code init
   also update the package.json file, creates package-lock.json file
-->Transative Dependencies are installing dependencies and it's dependencies and go on like that.
-->package-lock.json have exact version of package installed in project
-->^ do minor version update of packages when run npm install
-->~ do major version update of packages when run npm install
-->we have multiple package.json version in the project
-->we run npm install all the dependencies are resolved with dependency tree
-->we can gitignore node_modules, should keep track of package.json/package-lock.json
-->Package.json have dependencies and package-lock.json have exact version installed in app

Command to run parcel : npx parcel index.html
we gave index.html because it is the source or start point of the application
after running this command application is running in particular port


**************************************************************************************************

npx command is used to execute the npm packages.
npm command is used to install the packages.
npx parcel index.html will do the following build the file and run 
localhost server and host the application in that port

Note: getting react into the application with cdn is correct approach reason is
we need to make an additional network request which is costly operation.

we can get react into applicatio with node package manager as well. it is the correct way
npm install react@18.2.0 or npm i react@18.2.0
npm install react-dom@18.2.0

Pacel do the following things 
-->It build development version
-->It run a server and then hot this build
-->It do HMR --> Hot Module Replacement as well
-->Image Optimazition
-->Minification
-->bundling
-->conpression
-->File watching algorithm
-->consistent hashing
-->Code splitting
-->Differential Bundling : gives different bundles for different browsers
-->Diagnostics
-->Error handling
-->HTTPs
-->Tree shaking : removes unecssary code

After all those things the app will keep the result files in dist folder
For caching it will use parcel-cache folder

For production build --> npx parcel build index.html
we can add browserlist in the package.json so parcel will create bundles to support them