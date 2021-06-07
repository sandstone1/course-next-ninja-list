
/*
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
*/

















// ===============================





















// at the beginning of tutorial 6, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Nav component
import Nav from './Nav';
// import in the Footer component
import Footer from './Footer';

// and remember we want the Layout component to wrap around all the page components or
// " <Component { ...pageProps } /> " so " <Component { ...pageProps } /> " will be passed in
// as a child to the Layout component


const Layout = ( { children } ) => {

    return (

        <div className="layout-container">

            <Nav />

            { children }

            <Footer />

        </div>

    );

}


export default Layout;

