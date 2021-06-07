
/*
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
*/

















// ===============================





















// at the beginning of tutorial 6, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Layout component
import Layout from '../components/Layout';
// import in our global stylesheet
import '../styles/globals.scss'

// wrap the Layout component around " <Component { ...pageProps } /> " and
// " <Component { ...pageProps } /> " is what renders the pages in the application

// create the MyApp component and pass in the page component or " Component " and the
// page props or " pageProps "
function MyApp( { Component, pageProps } ) {

	// and now let's wrap our Layout component around our page component
    return ( 
		
		<Layout>
		
			<Component { ...pageProps } />

		</Layout>

	);

}


export default MyApp

