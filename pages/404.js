
/*
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
*/

















// ===============================




















/*
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

/*
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
*/

















// ===============================





















// at the beginning of tutorial 8, given all the notes, I created a new file below without
// the notes so we are starting fresh

// and remember this is a specially named file much like the index.js file and therefore
// this file does not generate the following url: " http://localhost:3010/404 "

// instead we can create a 404 component so that if a user tries to go to a page that does not
// exist then next will serve up this file or page component instead

// import in the Link component
import Link from 'next/link';
// import in the useEffect(); hook
import { useEffect } from 'react';
// import in the useRouter(); hook
import { useRouter } from 'next/router';

// import in the scss file
import notFoundStyles from '../styles/404.module.scss';


const NotFound = () => {

    // initialize router and useRouter(); gives us access to a method that we can use to
    // redirect the user
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


    return (

        <div className={ notFoundStyles.notfound }>

            <h1>Ooops...</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href="/"><a>Home page</a></Link></p>

        </div>

    );

}


export default NotFound;

