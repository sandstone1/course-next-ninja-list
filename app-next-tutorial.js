
// ==============================
// STEPS TO QUITING AND THEN RESTARTING TERMINAL
// ==============================

// to get back to the main folder directory, we need to type:
// " cd /Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/next_tutorial "














// ==============================
// STEPS TO UPDATING NODE.JS
// ==============================



// ==============================
// MAKE SURE TO UPDATE NODE.JS TO THE LATEST STABLE VERSION IN THE INTEGRATED TERMINAL
// ==============================



// ****************
// STEP 1 - GET THE INSTALLED VERSION
// ****************

// go to the integrated termimal and do
// " Home@Rogers-iMac next_tutorial % node -v "

// and see what node version is currently set as the default



// ****************
// STEP 2 - UPDATE TO LATEST STABLE VERSION
// ****************

// go to the integrated termimal and do

// " Home@Rogers-iMac next_tutorial % sudo npm cache clean -f "

// " Home@Rogers-iMac next_tutorial % sudo npm install -g n "

// " Home@Rogers-iMac next_tutorial % sudo n stable "

// check and make sure the node version is the latest stable version

// " Home@Rogers-iMac next_tutorial % node -v "

// and I see " v14.17.0 " and this is the correct version






















// ==============================
// STEPS TO FIX MONGODB WHITELIST ISSUE
// ==============================

// The steps below are taken from the following website:
// https://studio3t.com/knowledge-base/articles/mongodb-atlas-login-ip-whitelisting/#whitelist-your-current-ip-address


/*
// TITLE
How to whitelist IP addresses on MongoDB Atlas

// SUBTITLE
Whitelist your current IP address

// TEXT
With your MongoDB Atlas login credentials, open your account and find the cluster that is
triggering the error message.

// TEXT
Next, click on Network Access under the Security tab on the left-hand sidebar. This will take
you to the IP Whitelist tab.

// TEXT
Click on Add IP Address in the top-right corner. This will open the Add IP Whitelist Entry
dialog.

// TEXT
Click on Add current IP address. MongoDB will automatically detect your current address,
then click Confirm.

// TEXT
MongoDB Atlas will take a few minutes to deploy the changes, after which you should be good to go.
*/














// ==============================
// MODULES INSTALLED AND UNINSTALLED
// ==============================


// #1
// next.js: " Home@Rogers-iMac the_net_ninja % npx create-next-app next_tutorial --use-npm "
// and this will generate our next application into a folder called next_tutorial and we will
// indicate to next that we want to use npm and not yarn
// tutorial 1: Introduction & Setup


// #2
// sass: " Home@Rogers-iMac next_tutorial % npm install sass " and this will install sass
// into our application
// tutorial 1: Introduction & Setup
















// ==============================
// NEXT.JS TUTORIAL
// ==============================



// ==============================
// TUTORIAL 1 - Introduction & Setup
// ==============================

// What is Next.js? => Title

// 1 - Next is framework for creating pre rendered react websites ( whether that be through
// server side rendering or static site generation )

// 2 - Offers us both server side rendering and static site generation

// server side rendering ( SSR ) is when react components are rendered into html pages on the
// server after a page request comes from the browser and static site generation ( SSG ) is
// when components are rendered into html pages at build time and next.js allows us to do both
// server side rendering and static site generation easily

// and at some point the pages can behave more like an SPA or single page application in that
// all routing can be handled on client side in the browser

// now in contrast to this, react without next renders components in the browser instead and
// this is known as client side rendering

// SSR and SSG Benefits => Title

// 1 - pre rendering improves preformance

// 2 - better SEO

// in this series, the net ninja is going to show us how to create a ninja list website and
// this series will teach us all the basics of next like routing, data fetching, etc.

// my GitHub repo for this course ( tutorial 1 ) is located at: 
// " https://github.com/iamshaunjp/nextjs-tutorial/tree/lesson-1 "

// let's start by creating a new next application and we do that by doing the following:

/*
Home@Rogers-iMac the_net_ninja % npx create-next-app next_tutorial --use-npm
npx: installed 1 in 1.251s
Creating a new Next.js app in /Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/next_tutorial.

Using npm.

Installing dependencies:
- react
- react-dom
- next

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN notsup Unsupported engine for jest-worker@27.0.0-next.5: wanted: {"node":"^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"} (current: {"node":"14.5.0","npm":"6.14.5"})
npm WARN notsup Not compatible with your version of node/npm: jest-worker@27.0.0-next.5

+ react-dom@17.0.2
+ react@17.0.2
+ next@10.2.3
added 268 packages from 229 contributors and audited 268 packages in 12.694s

44 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Initialized a git repository.

Success! Created next_tutorial at /Applications/MAMP/htdocs/stoneburyhomes/misc/the_net_ninja/next_tutorial
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd next_tutorial
  npm run dev

Home@Rogers-iMac the_net_ninja %
*/

// and now we have boilerplate next application

// next, let's install sass so we can use it in our application


// #2
// sass: " Home@Rogers-iMac next_tutorial % npx install sass " and this will install sass
// into our application
// tutorial 1: Introduction & Setup


// our initial file structure looks like:

// next_crash_course
//    node_modules
//    pages
//      api
//        hello.js
//      app.js
//      index.js
//    public
//      favicon.ico
//      vercel.svg
//    styles
//      global.css
//      Home.module.css
//    .gitignore
//    app-next-tutorial
//    package-lock.json
//    package.json
//    README.md

// all of our dependencies are stored in the node_modules folder and all our pages are
// stored in the pages folder and the idea is that in next every page is its own component
// and the only page we have at the monent is the index page and this is the home page and
// the _app.js component is our root component and all the pages will be rendered inside
// the _app.js component and we have an api folder which is for api endpoints

// and we have a public folder and this is where all of our public assets like images go
// and we have styles folder and this is where all of our css or scss files go and we have
// a package.json file

// and let's look at the package.json file:

/*
{
	"name": "next_tutorial",
	"version": "0.1.0",
	"private": true,
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start"
	},
	"dependencies": {
		"next": "10.2.3",
		"react": "17.0.2",
		"react-dom": "17.0.2"
	}
}
*/

// and when we run " npm run dev " then we will spin up a local development server

// and remember I had to change "  "dev": "next dev", " in package.json to 
// " "dev": "next dev -p 3010", " so that I could run the app on port 3010

// let's go to the index.js file and replace the html with something simple


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/INDEX.JS
// ==============================


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

	return (
		<div>

			<h1>Home Page</h1>

		</div>
	);

}




// -------------------- END OF FILE


// now remember this component is being pre rendered before it reaches the browser and during
// development this is done via server side rendering so the server renders the component and
// then sends the html file to the browser and this happens on each page request from the
// browser and later on in the course we will see how to render pages at build time for
// production and this process is called static site generation

// next, we will dive into how next handles routing and pages








// ==============================
// TUTORIAL 2 - Pages & Routes
// ==============================

// we have a pages folder and inside the pages folder is where we create all of our page
// components and each page in next is driven by a react component so for an about page we
// have an about component and for a contact page we have a contact component, etc. and
// each page component has its own file inside the pages folder and the file name and
// location of each page component is tied to the route for that particular page

// for example, if we create an about.js file in the pages folder then next will automatically
// create the route /about so the route name is tied to the file name and the one exception to
// this is the index.js file and that file is located at " / "

// let's create an about page and go to the about.js 1 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/ABOUT.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -

const About = () => {

    return (

        <div>
            <h1>About</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>
        </div>

    );

}


export default About;

// check and see if everything is working as expected and when I go to
// " http://localhost:3010/about " I see everything is working as expected

// and remember we can create sub folders inside the pages folder and if we created
// a folder called ninjas and then created a file inside the ninjas folder called " test.js "
// and let's go to the test.js 1 - file now

// End of 1 -




// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/TEST.JS
// -- NOTES PERTAIN TO 1 -
// ==============================



// 1 -


const Test = () => {

    return (

        <div>
            <h1>Test</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>
        </div>

    );

}


export default Test;

// now the route for this page component will be " /ninjas/test "


// and if I go to " http://localhost:3010/ninjas/test " I see the test page and everything
// is working as expected

// now let's create a new file inside the ninjas folder called " index.js " and let's go
// to the index.js 1 - file now

// End of 1 -





// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/INDEX.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -


const NinjasIndex = () => {

    return (

        <div>
            <h1>All Ninjas</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>
        </div>

    );

}


export default NinjasIndex;

// now the route for this page component will be " /ninjas "


// and if I go to " http://localhost:3010/ninjas " I see the Ninjas Index page and everything
// is working as expected

// and this shows how simple it is to create a multi page website with next

// End of 1 -





// -------------------- END OF FILE





// ==============================
// TUTORIAL 3 - Adding Other Components
// ==============================

// in next you can components which are not page components and this could include components
// like a nav bar component or contact form component and we put these components in a folder
// called components and let's create the components folder and then inside this folder let's
// create a file called nav.js and let's go to the nav.js 1 - file now



// ==============================
// BACK FROM NEXT_TUTORIAL/COMPONENTS/NAV.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -

const Nav = () => {

    return (

        <nav>

            <div className="logo">

                <h1>Ninja List</h1>

            </div>

            <a>Home</a>
            <a>About</a>
            <a>Ninja Listing</a>

        </nav>

    );

}


export default Nav;


// let's add this component to our home page component so let's go to the index.js 1 - file
// now

// End of 1 -




// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/INDEX.JS
// -- NOTES PERTAIN TO 1 -, 2 -
// ==============================


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// 1 -
// coming from the nav.js 1 - file

// import in the nav component
import Nav from '../components/nav';

// and if we go to the home page we can now see the Nav component on the home page

// now let's create the footer component and let's go to the footer.js 1 - file

// End of 1 -


// 2 -
// coming from the footer.js 1 - file

// import in the footer component
import Footer from '../components/footer';

// and if we go to the home page we can now see the Footer component on the home page

// import in Fragment from react
import { Fragment } from 'react';

// and this shows how simple it is to create other react components that are not page
// components and these other components can be dropped into page components and they
// can be reused as well   

// End of 2 -


export default function Home() {

	return (

		<Fragment>

			<Nav />

			<main>

				<h1>Home Page</h1>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum."
				</p>

			</main>

			<Footer />

		</Fragment>

	);

}





// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/COMPONENTS/FOOTER.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -
// coming from the index.js 1 - file


const Footer = () => {

    return (

        <footer>

            <div>

                Copyright 2021 Ninja List

            </div>

        </footer>

    );

}


export default Footer;

// let's add this component to our home page component so let's go to the index.js 2 - file
// now

// End of 1 -




// -------------------- END OF FILE







// ==============================
// TUTORIAL 4 - Linking Between Pages
// ==============================

// so we now have multiple pages in our application and we have a nav bar component and
// let's hook up the links on the nav bar component and we do this by using the Link component
// and the Link component has the ability to do client side navigation in the browser so let's
// go to the nav.js 2 - file now



// ==============================
// BACK FROM NEXT_TUTORIAL/COMPONENTS/NAV.JS
// -- NOTES PERTAIN TO 2 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh


// 2 -
// import in the Link component
import Link from 'next/link';

// next let's surround the anchor tags with this Link component and then let's add in the
// href attribute to each Link component and remember we add the href to the Link component
// and then inside the Link component we have anchor tags

// and if we test out these links we see that everything is working as expected

// now let's go to the index.js 3 - file now

// End of 2 -


const Nav = () => {

    return (

        <nav>

            <div className="logo">

                <h1>Ninja List</h1>

            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>

        </nav>

    );

}


export default Nav;




// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/INDEX.JS
// -- NOTES PERTAIN TO 3 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh

import Head from 'next/head'
import Image from 'next/image'
// import in Fragment from react
import { Fragment } from 'react';
// import in the nav component
import Nav from '../components/nav';
// import in the footer component
import Footer from '../components/footer';

import styles from '../styles/Home.module.css'


// 3 -
// import in the Link component
import Link from 'next/link';

// add a link to the ninjas listing page at the bottom of the page, right before the footer tag

// and if we test this out we seee that everything is working as expected

// next let's look at code splitting and by default next automatically code splits our
// application so that only the javaScript code that is needed for the current page is
// served from the server and only when we navigate to another page will next serve the
// JavaScript for that page

// and remember in production next will prefetch any code in the background that is needed
// when a user clicks on a link from a another page and next does this by looking at all the
// link components on the current page and then prefetching the code needed so that if a user
// clicks on a certain link then that page code has already been fetched and this makes for a
// very quick user experience

// End of 3 -


export default function Home() {

	return (

		<Fragment>

			<Nav />

			<main>

				<h1>Home Page</h1>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum."
				</p>
				<Link href="/ninjas">
					<a>See Ninja Listing</a>
				</Link>

			</main>

			<Footer />

		</Fragment>

	);

}




// -------------------- END OF FILE









// ==============================
// TUTORIAL 5 - Creating a Layout Component
// ==============================

// now we understand how to create " drop in " components like the nav and footer components
// and ideally we would like these 2 components to be on every page in the application and we will
// accomplish this by creating a layout component and this layout component will wrap around
// all of our page components and first let's create the layout component and then let's go to the
// _app.js 1 - file


// ==============================
// BACK FROM NEXT_TUTORIAL/COMPONENTS/LAYOUT.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -

// 2 -
// and remember we want the Layout component to wrap around all the page components or
// " <Component { ...pageProps } /> " so " <Component { ...pageProps } /> " will be passed in
// as a child to the Layout component

// import in the Nav component
import Nav from './Nav';
// import in the Footer component
import Footer from './Footer';

// and remember to delete the Nav and Footer components from the pages/index.js file

// and if I test this out I still see the nav and the footer so everything is working as
// expected


const Layout = ( { children } ) => {

    return (

        <div className="layout-container">

            <Nav />

            { children }

            <Footer />

        </div>

    );

    // End of 2 -
}


export default Layout;

// go to the _app.js 1 - file now

// End of 1 -





// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/_APP.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


import '../styles/globals.css'


// 1 - 

// import in the Layout component
import Layout from '../components/Layout';

// wrap the Layout component around " <Component { ...pageProps } /> " and
// " <Component { ...pageProps } /> " is what renders the pages in the application

// let's go back to the Layout.js 2 - file now

// End pf 1 -


function MyApp( { Component, pageProps } ) {

	return (
	
		<Layout>

			<Component { ...pageProps } />

		</Layout>

	);

}


export default MyApp




// -------------------- END OF FILE










// ==============================
// TUTORIAL 6 - Adding Styles
// ==============================

// you can add css to next projects in various different ways and we will be using a mix
// of global style sheets and css modules and our global styles are located in the globals.css
// file and let's go to the globals.css 1 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/STYLES/GLOBALS.CSS
// -- NOTES PERTAIN TO 1 -
// ==============================


/*
// 1 -
// delete all the styles and insert our own styles
*/

/*
@import url( 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap' );

body {
	
	font-family : "Nunito";
	color       : rgba( 51, 51, 51, 1 );

	background : rgba( 242, 242, 242, 1 );
}

a {

	color           : rgba( 51, 51, 51, 1 );
	text-decoration : none;

}

.layout-container {

	max-width : 960px;
	margin    : 0 auto;

}

nav {
	display         : flex;
	justify-content : space-between;
	margin          : 10px auto 80px;
	padding         : 10px 0;
	
	border-bottom : 1px solid rgba( 221, 221, 221, 1 );

}

.nav-right {

	display               : grid;
	grid-template-rows    : auto;
	grid-template-columns : repeat( 3, 1fr );
	align-content         : center;

}


footer {

	display : block;
	padding : 30px 0;
	margin  : 60px 0 0 0;

	border-top : 1px solid rgba( 234, 234, 234, 1 );

	color      : rgba( 119, 119, 119, 1 );
	text-align : center;

}

/*
// End of 1 -
*/





// -------------------- END OF FILE




// now let's create some page specific styles and to do that we will use css modules
// and css modules allow us to write a style sheet for each page component and next will
// automatically scope those styles to that component by adding random characters to the
// class names

// let's test this out by going to the pages/index.js 4 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/INDEX.JS
// -- NOTES PERTAIN TO 4 -, 5 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh

import Head from 'next/head'
import Image from 'next/image'
// import in the Link component
import Link from 'next/link';
// import in Fragment from react
import { Fragment } from 'react';
/*
// import in the nav component
import Nav from '../components/nav';
// import in the footer component
import Footer from '../components/footer';
*/

import styles from '../styles/Home.module.scss'

// by default next automatically code splits our application so that only the javaScript code
// that is needed for the current page is served from the server and only when we navigate to
// another page will next serve the JavaScript for that page

// and remember in production next will prefetch any code in the background that is needed
// when a user clicks on a link from a another page and next does this by looking at all the
// link components on the current page and then prefetching the code needed so that if a user
// clicks on a certain link then that page code has already been fetched and this makes for a
// very quick user experience


// 4 -

// let's test out the styles and to do that I gave the container class inside the Home.module.css
// a background of red and then let's go to the main element below and add
// " className={ styles.container } " and after I do this I see that the main element's background
// is red and this is correct so everything is working as expected

// I also see that the main element has a class name of " Home_container_1EcsU " and if we used
// the class name of container in the About component, for example, then the class name would
// be " About_container_xxxxx "

// and if we go to the Head we can see all the styles listed for this component under
// <style>...</style>

// now let's go to the Home.module.css 1 - file

// End of 4 -


// 5 -
// now that we have added the styles into the Home component, let's preview this in the
// browser and when I do I see that everything is working as expected

// and let's create a new file called Ninjas.module.css and let's go to the
// Ninjas.module.css 1 - file now

// End of 5 -


export default function Home() {

	return (

		<Fragment>

			<main className={ styles.main }>

				<h1 className={ styles.title }>Home Page</h1>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum."
				</p>
				<Link href="/ninjas">
					<a className={ styles.button }>See Ninja Listing</a>
				</Link>

			</main>

		</Fragment>

	);

}





// -------------------- END OF FILE








// ==============================
// BACK FROM NEXT_TUTORIAL/STYLES/HOME.MODULE.SCSS
// -- NOTES PERTAIN TO 1 -
// ==============================


/*
// 1 -
// delete all the styles and insert our own styles
*/

/*
.title {

	padding : 0 0 20px 0;

	color      : rgba( 51, 51, 51, 1 );	
	text-align : center;
}

.main > p {

	color: rgba( 119, 119, 119, 1 );

}

.button {

	display : block;
	width   : 150px;
	margin  : 20px auto;
	padding : 8px 0;
	
	border-radius : 4px;

	color      : rgba( 255, 255, 255, 1 );
	text-align : center;

	background: rgba( 73, 121, 255, 1 );

}
*/

/*
// now let's go back to the index.js 5 - file
// End of 1 -
*/




// -------------------- END OF FILE










// ==============================
// TUTORIAL 7 - Custom 404 Page
// ==============================

// if a user tries to go to a page that does not exist then we get a next generated
// 404 page but we can create our own custom 404 page and let's start by creating a
// new file called 404.js inside the pages folder and let's go to the 404.js 1 -
// file now



// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/404.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -

// and remember this is a specially named file much like the index.js file and therefore
// this file does not generate the following url: " http://localhost:3010/404 "

// instead we can create a 404 component so that if a user tries to go to a page that does not
// exist then next will serve up this file or page component instead

// import in the Link component
import Link from 'next/link';

// and let's test this out and when I go to " http://localhost:3010/abcd " I see our custom
// 404 page so everything is working as expected

// import in the scss file
import notFoundStyles from '../styles/404.module.scss';


const NotFound = () => {

    return (

        <div className={ notFoundStyles.notfound }>

            <h1>Ooops...</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href="/"><a>Home page</a></Link></p>

        </div>

    );

}


export default NotFound;

// End of 1 -





// -------------------- END OF FILE








// ==============================
// BACK FROM NEXT_TUTORIAL/STYLES/404.MODULE.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


/*
// 1 -
.notfound {

    text-align : center;

    a {

        color           : rgba( 73, 121, 255, 1 );
        text-decoration : underline;

    }

}

// End of 1 -
*/




// -------------------- END OF FILE












// ==============================
// TUTORIAL 8 - Redirecting Users
// ==============================

// sometimes we need to redirect the user to a different page in the website without them
// clicking on a link and this could be after a user submits a form, for example, and the
// net ninja wants to redirect the user from the 404 page to the home page after 3 seconds
// and we will use the useEffect(); hook and the useEffect(); hook is a react hook that
// fires a function when the component first mounts

// let's go to the 404.js 2 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/404.JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// at the beginning of tutorial 8, given all the notes, I created a new file below without
// the notes so we are starting fresh

// and remember this is a specially named file much like the index.js file and therefore
// this file does not generate the following url: " http://localhost:3010/404 "

// instead we can create a 404 component so that if a user tries to go to a page that does not
// exist then next will serve up this file or page component instead

// import in the Link component
import Link from 'next/link';

// import in the scss file
import notFoundStyles from '../styles/404.module.scss';


// 2 -
// import in the useEffect(); hook
import { useEffect } from 'react';

// and we can see that react is a dependency in the package.json file

/*
"dependencies": {
    "next": "10.2.3",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "sass": "^1.34.1"
}
*/

// import in the useRouter(); hook
import { useRouter } from 'next/router';

// and useRouter gives us access to a method that we can use to redirect the user 

// End of 2 -


const NotFound = () => {


    // 2 - continued

    // initialize router
    const router = useRouter();

    useEffect( () => {

        // use setTimeout to redirect the user after 3 seconds
        setTimeout( () => {

            // router.go(); allows us to go back and forth through the browser history;
            // for example, router.go( -1 ); would take us back to the previous page but
            // we want to use router.push();
            router.push( '/' );

        }, 3000 );

    }, [] );

    // let's test this out by going to a 404 page and when I do I see that everything is
    // working as expected

    // End of 2 -


    return (

        <div className={ notFoundStyles.notfound }>

            <h1>Ooops...</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href="/"><a>Home page</a></Link></p>

        </div>

    );

}


export default NotFound;





// -------------------- END OF FILE









// ==============================
// TUTORIAL 9 - Images & Metadata
// ==============================

// now we want to replace the Ninja List heading with a logo, which will be an image and to work
// with images we need to talk about static assets in next applications and all we do with images
// is place them in the public folder and then they become accessible from the browser and let's
// place the ninjs list icon in the public folder and let's go to the nav.js 3 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/COMPONENTS/NAV.JS
// -- NOTES PERTAIN TO 3 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Link component
import Link from 'next/link';

// next let's surround the anchor tags with this Link component and then let's add in the
// href attribute to each Link component and remember we add the href to the Link component
// and then inside the Link component we have the anchor tags


// 3 -
// let's replace " <h1>Ninja List</h1> " with " <img src="logo.png" /> "

// and this is how we use images in next applications, however, in next version 10 we have
// access to an image component and we can use the image component instead of
// " <img src="logo.png" /> " and let's use the image component instead of
// " <img src="logo.png" /> "

// import in the image component
import Image from 'next/image';

// and to use the Image component all we need to do is change " <img src="logo.png" /> " to
// " <Image src="logo.png" /> " and then add a width and height to the image

// another good thing about using the Image component is that next automatically uses lazy
// loading for images so if an image is below the fold it will not be loaded until the
// user scrolls down the page and this optimizes our page loading times

// and the other thing we want to talk about in this video is metadata and let's go to
// the pages/index.js 6 - file now

// End of 3 -


const Nav = () => {

    return (

        <nav>
            
            <div className="nav-left">
            
                <Image src="/logo.png" width={ 128 } height={ 77 } />

            </div>

            <div className="nav-right">
            
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja Listing</a></Link>

            </div>

        </nav>

    );

}


export default Nav;




// -------------------- END OF FILE








// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/INDEX.JS
// -- NOTES PERTAIN TO 6 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh

import Head from 'next/head';
import Image from 'next/image';
// import in the Link component
import Link from 'next/link';
// import in Fragment from react
import { Fragment } from 'react';
/*
// import in the nav component
import Nav from '../components/nav';
// import in the footer component
import Footer from '../components/footer';
*/

import styles from '../styles/Home.module.scss'

// by default next automatically code splits our application so that only the javaScript code
// that is needed for the current page is served from the server and only when we navigate to
// another page will next serve the JavaScript for that page

// and remember in production next will prefetch any code in the background that is needed
// when a user clicks on a link from a another page and next does this by looking at all the
// link components on the current page and then prefetching the code needed so that if a user
// clicks on a certain link then that page code has already been fetched and this makes for a
// very quick user experience

// let's go to the main element below and add " className={ styles.container } " and after
// I do this I see that the main element has a class name of " Home_container_1EcsU " and if
// we used the class name of container in the About component, for example, then the class
// name would be " About_container_xxxxx "

// and if we go to the Head we can see all the styles listed for this component under
// <style>...</style>


// 6 -
// coming from the nav.js 3 - file

// let add " <Head></Head> " below and then insert the meta data inside the Head component and
// after adding " <title>Ninja List | Home</title> " I can see " Ninja List | Home " in the
// browser tab 

// let's add " <meta name="keywords" content="ninjas" /> " and if we go to the home page and
// look inside the Head we can see " <meta name="keywords" content="ninjas" /> " and this is
// correct so everything is working as expected

// let's bring in:
/*
<Head>

	<title>Ninja List | Home</title>
	<meta name="keywords" content="ninjas" />

</Head>
*/

// to the about component and let's go to the about.js 2 - file now

// End of 6 -


export default function Home() {

	return (

		<Fragment>

			<Head>

				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />

			</Head>

			<main className={ styles.main }>

				<h1 className={ styles.title }>Home Page</h1>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum."
				</p>
				<Link href="/ninjas">
					<a className={ styles.button }>See Ninja Listing</a>
				</Link>

			</main>

		</Fragment>

	);

}




// -------------------- END OF FILE








// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/ABOUT.JS
// -- NOTES PERTAIN TO 2 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh


// 2 -
// coming from the index.js 6 - file

// import in the Head component
import Head from 'next/head';

// and then copy the Head html from the index.js file and paste it below

// and let's go to the about page and we see that everything is working as expected

// End of 2 -


const About = () => {

    return (

        <div>

            <Head>

                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />

            </Head>

            <h1>About</h1>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>

        </div>

    );

}


export default About;




// -------------------- END OF FILE











// ==============================
// TUTORIAL 10 - Fetching Data (getStaticProps)
// ==============================

// the next step is to make the site more dynamic and bring data into the mix and it would be
// nice to fetch some data from an api endpoint and then show the data in one of our page
// components

// in normal react applications we might make a fetch request in the useEffect(); hook but in
// next we will use getStaticProps to fetch data

// let's go to the ninjas/index.js 2 - file


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/INDEX.JS
// -- NOTES PERTAIN TO 2 -
// ==============================


// at the beginning of tutorial 4, given all the notes, I created a new file below without
// the notes so we are starting fresh

// 2 -
// let's fetch the data by using getStaticProps and remember getStaticProps runs at build time
// or before the component renders on the page so once we get the data then we pump the data
// into the component or pump the data into the NinjasIndex component below

// and remember the code inside getStaticProps does not run in the browser
export const getStaticProps = async () => {

    const res = await fetch( `https://jsonplaceholder.typicode.com/users` );

	// now let's get the data from the fetch request above and then save the data to the const
	// called data and data will be an array of objects and each object represents a user
	const data = await res.json();

    // then do the following to make the users or ninjas available throughout the application
	return {
		props : {
			users : data
		}
	}

    // and now we can use destructuring to pass in the users to the ninjas page

}

// map through users below and return some kind of template or

/*
    {

        users.map( ( user ) => (

            <div key={ user.id }>

                <a>
                    <h3>{ user.name }</h3>
                </a>
            
            </div>

        ) )

    }
*/

// now let's go to the ninjas page and test this out and when I do I see that
// everything is working as expected

// let's add in a few styles to the Ninjas.module.scss file and let's go to the Ninjas.module.scss
// 1 - file now

// import in the stylesheet
import styles from '../../styles/Ninjas.module.scss'

// now if I go to the ninjas page and review I see that everything is working as expected

// End of 2 -


const NinjasIndex = ( { users } ) => {

    return (

        <div>

            <h1>All Ninjas</h1>

            {

                users.map( ( user ) => (

                    <div key={ user.id }>

                        <a className={ styles.single }>
                            <h3>{ user.name }</h3>
                        </a>
                    
                    </div>

                ) )

            }

            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>

        </div>

    );

}


export default NinjasIndex;

// and if I go to " http://localhost:3010/ninjas " I see the Ninjas Index page and everything
// is working as expected

// and this shows how simple it is to create a multi page website with next




// -------------------- END OF FILE








// ==============================
// BACK FROM NEXT_TUTORIAL/STYLES/NINJAS.MODULE.SCSS
// -- NOTES PERTAIN TO 1 -
// ==============================


/*
// 1 -
.single {

    display : block;
    margin  : 20px 10px 20px 0;
    padding : 2px 16px 2px 16px;
    
    border-left : 8px solid rgba( 255, 255, 255, 1 );

    background : rgba( 255, 255, 255, 1 );

    &:hover {

        border-left : 8px solid rgba( 73, 121, 255, 1 );

    }

}

// End of 1 -
*/




// -------------------- END OF FILE











// ==============================
// TUTORIAL 11 - Dynamic Routes (part 1)
// ==============================

// now we are going to create a page and a route for each user and to do that we will need to
// talk about route parameters

// Dynamic Routes - SLIDE TITLE

// the routes that we need to generate for the user pages will look like: " /ninjas/id "

// and the id is the changable part of the route and each different id will represent a different
// user and we could have " /ninja/1 " or " /ninja/25 " and we will need to generate a route for
// each user

// and let's talk about what next does for us in terms of static site generation ( SSG ) so once
// we've completed development of our application next will generate a static site for us based on
// all of our page components and it is at this point that next will render all of our page
// components into html files and JavaScript bundles

// and next will render an html file or page for each user and let's create the user details
// component and each user page will be based on the user details component and path to the user
// details component will be /pages/ninjas/[id].js and " [id].js " is a route parameter and the
// id in " [id].js " is changable

// and let's go to the [id].js 1 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/[ID].JS
// -- NOTES PERTAIN TO 1 -
// ==============================


// 1 -

// and after creating the functional component below, I go to the following URL:
// " http://localhost:3010/ninjas/1 " and I see the correct html so everything is working
// as expected

// and the next thing we want to do is link to a user details page when we click on a
// link in the pages/ninjas/index.js page so let's go to the index.js 3 - file now

const UserDetails = () => {

    return (

        <div>

            <h1>Details Page</h1>

        </div>

    );

}


export default UserDetails;

// End of 1 -




// -------------------- END OF FILE







// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/INDEX.JS
// -- NOTES PERTAIN TO 3 -
// ==============================


// at the beginning of tutorial 11, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the stylesheet
import styles from '../../styles/Ninjas.module.scss'

// let's fetch the data by using getStaticProps and remember getStaticProps runs at build time
// or before the component renders on the page so once we get the data then we pump the data
// into the component or pump the data into the NinjasIndex component below

// and remember the code inside getStaticProps does not run in the browser
export const getStaticProps = async () => {

    const res = await fetch( `https://jsonplaceholder.typicode.com/users` );

	// now let's get the data from the fetch request above and then save the data to the const
	// called data and data will be an array of objects and each object represents a user
	const data = await res.json();

    // then do the following to make the users or ninjas available throughout the application
	return {
		props : {
			users : data
		}
	}

    // and now we can use destructuring to pass in the users to the ninjas page

}

// map through users below and return some kind of template


// 3 -
// coming from the pages/ninjas/[id].js 1 - file

// we want to link to the user details page and the user we link to will be based on the
// route parameter

// import in the Link component
import Link from 'next/link';

// change " <div key={ user.id }></div> " below to
// " <Link href={ `/ninjas/${ user.id }` } key={ user.id }></Link> " and now if I click
// on one of the users; for example, if I click on user 1 then I go to the following URL:
// " http://localhost:3010/ninjas/1 " and this is correct so everything is working as expected

// End of 3 -


const NinjasIndex = ( { users } ) => {

    return (

        <div>

            <h1>All Ninjas</h1>

            {

                users.map( ( user ) => (

                    <Link href={ `/ninjas/${ user.id }` } key={ user.id }>

                        <a className={ styles.single }>
                            <h3>{ user.name }</h3>
                        </a>
                    
                    </Link>

                ) )

            }

            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum."
            </p>

        </div>

    );

}


export default NinjasIndex;

// and if I go to " http://localhost:3010/ninjas " I see the Ninjas Index page and everything
// is working as expected

// and this shows how simple it is to create a multi page website with next





// -------------------- END OF FILE











// ==============================
// TUTORIAL 12 - Dynamic Routes (part 2)
// ==============================

// we need a way to explicitly tell next what routes and pages we need to create for each
// user or each route parameter and we need to be able to do this at build time based on
// the data and to do this we use a function called getStaticPaths and this function will
// run at build time and inside the function we will return all the possible values for
// our route parameters and then next will known to generate a route and an html page for each
// route parameter

// and let's create the getStaticPaths function inside the pages/ninjas/[id].js file so
// let's go to the [id].js 2 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/[ID].JS
// -- NOTES PERTAIN TO 2 -
// ==============================


// at the beginning of tutorial 12, given all the notes, I created a new file below without
// the notes so we are starting fresh

// and after creating the functional component below, I go to the following URL:
// " http://localhost:3010/ninjas/1 " and I see the correct html so everything is working
// as expected


// 2 -

export const getStaticPaths = async () => {

    // we need to get all the data so that next will know how many routes and html pages it
    // needs to generate 

    // in getStaticPaths we want to make a request to get all the users
    const res = await fetch( `https://jsonplaceholder.typicode.com/users` );

	// now let's get the data from the fetch request above and then save the data to the const
	// called articles
    const users = await res.json();
    
    // and this is what we are seeking to return
    /*
    return {

        paths : [

            { params : { id : '1' } },
            { params : { id : '2' } },
            { params : { id : '3' } }

        ]

    }
    */

    // so essentially we need to take the data that is returned and that data is an array
    // of user objects and we need to turn that data into " { params : { id : '1' } } " and
    // then pass that key ( i.e. params ) value pair into paths and we can do this with 1
    // line of code ( see below )

    // Line 1
    // get an array of these objects ( i.e. { params : { id : '1' } } ) and save this array
    // to the const called paths
    const paths = users.map( ( user ) => (

         { params : { id : user.id.toString() } }

    ) );

    // so now all we need to return is " paths : paths " and add " fallback : false " and this
    // means if we go to something in the data that does not exist then we will be forwarded to
    // a 404 page
    return {
        paths    : paths,
        fallback : false
    }

    // so now when next builds our app for production it will look at the paths value, which is
    // an array of objects and next will build a route and an html page for each object in the
    // array using the parameters we specified and in our case next will build 10 routes and
    // 10 pages because we have 10 different ids and for each page next will use the UserDetails
    // component to create the page 

}

// End of 2 -


const UserDetails = () => {

    return (

        <div>

            <h1>Details Page</h1>

        </div>

    );

}


export default UserDetails;






// -------------------- END OF FILE









// ==============================
// TUTORIAL 13 - Fetching a Single Item
// ==============================

// and let's create the getStaticProps function inside the pages/ninjas/[id].js file so
// let's go to the [id].js 3 - file now


// ==============================
// BACK FROM NEXT_TUTORIAL/PAGES/NINJAS/[ID].JS
// -- NOTES PERTAIN TO 3 -
// ==============================


// at the beginning of tutorial 13, given all the notes, I created a new file below without
// the notes so we are starting fresh

// and after creating the functional component below, I go to the following URL:
// " http://localhost:3010/ninjas/1 " and I see the correct html so everything is working
// as expected

export const getStaticPaths = async () => {

    // we need to get all the data so that next will know how many routes and html pages it
    // needs to generate 

    // in getStaticPaths we want to make a request to get all the users
    const res = await fetch( `https://jsonplaceholder.typicode.com/users` );

	// now let's get the data from the fetch request above and then save the data to the const
	// called users
    const users = await res.json();
    
    // and this is what we are seeking to return
    /*
    return {

        paths : [

            { params : { id : '1' } },
            { params : { id : '2' } },
            { params : { id : '3' } }

        ]

    }
    */

    // so essentially we need to take the data that is returned and that data is an array
    // of user objects and we need to turn that data into " { params : { id : '1' } } " and
    // then pass that key ( i.e. params ) value pair into paths and we can do this with 1
    // line of code ( see below )

    // Line 1
    // get an array of these objects ( i.e. { params : { id : '1' } } ) and then save this array
    // to the const called paths
    const paths = users.map( ( user ) => (

         { params : { id : user.id.toString() } }

    ) );

    // so now all we need to return is " paths : paths " and add " fallback : false " and this
    // means if we go to something in the data that does not exist then we will be forwarded to
    // a 404 page
    return {
        paths    : paths,
        fallback : false
    }

    // so now when next builds our app for production it will look at the paths value, which is
    // an array of objects and next will build a route and an html page for each object in the
    // array using the parameters we specified and in our case next will build 10 routes and
    // 10 pages because we have 10 different ids and for each page next will use the UserDetails
    // component below to create the page 

}


// 3 -

// remember we could use a combination of getStaticProps and getStaticPaths to dynamically
// generate the paths with the data

export const getStaticProps = async ( context ) => {

	// the fetch request below will fetch the specified user
	const res = await fetch( `https://jsonplaceholder.typicode.com/users/${ context.params.id }` );

	// now let's get the data from the fetch request above and then save the data to the const
	// called user and user will represent a user object
	const user = await res.json();

    // then do the following to make the user object available throughout the application
	return {
		props : {
			user : user
		}
	}

    // and now we can use destructuring below to pass in the data or user to the user details
    // page

}

// and if I test this out I see that everything is working as expected

// and if we go to the integrated terminal and enter
// " Home@Rogers-iMac next_tutorial % npm run build " then we will see a " next " folder and
// inside this folder I see:

//  .next
//      cache
//      server
//          chucks
//          pages
//              api
//              ninjas
//                  [id].js
//                  1.html
//                  1.json
//                  2.html
//                  2.json
//                  etc.
//                  etc.
//              _app.js
//              _document.js
//              _error.js
//              404.html
//              500.html
//              about.html
//              index.html
//              ninjas.html
//              ninjas.js
//              etc.
//          static

// so as we can see next generated the 10 ninja details pages for us

// End of 3 -


const NinjaDetails = ( { user } ) => {

    return (

        <div>

            <h1>{ user.name }</h1>
            <p>{ user.email }</p>
            <p>{ user.website }</p>
            <p>{ user.address.city }</p>

        </div>

    );

}


export default NinjaDetails;





// -------------------- END OF FILE










// ==============================
// TUTORIAL 14 - Deploying to Vercel
// ==============================

// the easiest way to deploy a next application is by using vercel and vercel allows us to
// easily sync our deployment with GitHub and everytime we make an update to GitHub Vercel
// will update our website

// to set up deployment with GitHub we first need to sign up with Vercel and when we come to
// the " Log in to Vercel " page click on the button that says " Continue with GitHub " and
// after I clicked on the button that says " Continue with GitHub " I had to authorize my
// GitHub account in order to proceed to the next page

// so the next thing we need to do is create a new repository in GitHub for our ninja list
// project and I gave this project a repository name of " course-next-ninja-list " and then
// pressed the " Create repository " button




// ==============================
// WORKFLOW - LOCALHOST SOLUTION - STEPS TO GETTING A NEXT APP UP AND RUNNING ON VERCEL
// ==============================



// ****************
// STEP 1 - CREATE A GITHUB REPOSITORY FOR THE PROJECT AND CONNECT PROJECT TO GITHUB
// ****************

// after creating a new repository in GitHub I need to connect my GitHub repository to my
// local machine and I do that by typing the following 5 commands in my project root folder and
// for the ninja list project that root folder is " Home@Rogers-iMac next_tutorial % " so the 5
// commands are:

// #1 - Home@Rogers-iMac next_tutorial % git remote add origin https://github.com/sandstone1/course-next-ninja-list.git
// ( and https://... came from the set up screen in GitHub )

// #2 - git status

// #3 - git add .

// #4 - git commit -m "first commit" ( from GitHub documentation )

// #5 - git push -u origin main ( from GitHub documentation )
// git push does take some arguments and the first argument is the -u flag and this flag creates
// the association between our local code and the upstream GitHub repository and we only have to
// run the -u flag one time and will never run it again and the next thing we are going to type
// is the remote or " origin " and the then the branch and by default the branch we are going
// to be working with is called " main "


// # Git Commands

// git init - creates a new git repo
// git status - allows us to view changes to our project
// git add . - allows us to add files to the staging area
// git commit -m "Message" - allows us to create a new commit with files from the staging area
// git push - push our changes to GitHub
// git log - allows us to view recent commits
// git pull - pulls the latest changes from GitHub
// git branch - will show us what branches we have and how many we have
// git branch newBranchName - allows us to add a new branch and give it a name
// git checkout newBranchName - move to the newBranchName branch and start working on that branch
// git merge main - merge main with the new branch
// git push origin conflict - if we get a error saying " git push --set-upstream origin conflict "


// updating my GitHub repository going forward:

// " git status "
// " git add . "
// " git commit -m " Message " "
// " git push "

