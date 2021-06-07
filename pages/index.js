
/*
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
*/


















// ===============================




















/*
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
*/


















// ===============================




















/*
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

/*
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
*/

















// ===============================




















/*
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

/*
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


/*
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
*/


















// ===============================





















// at the beginning of tutorial 10, given all the notes, I created a new file below without
// the notes so we are starting fresh

import Head from 'next/head';
import Image from 'next/image';
// import in the Link component
import Link from 'next/link';
// import in Fragment from react
import { Fragment } from 'react';

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

// let add " <Head></Head> " below and then insert the meta data inside the Head component and
// after adding " <title>Ninja List | Home</title> " I can see " Ninja List | Home " in the
// browser tab 

// let's add " <meta name="keywords" content="ninjas" /> " and if we go to the home page and
// look inside the Head we can see " <meta name="keywords" content="ninjas" /> " and this is
// correct so everything is working as expected


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


