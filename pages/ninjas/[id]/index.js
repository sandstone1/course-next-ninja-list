

/*
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
*/
















// ===============================




















/*
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
    /*
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
*/
















// ===============================




















/*
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
    /*
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
*/
















// ===============================





















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


// remember we could use a combination of getStaticPaths and getStaticProps to dynamically
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

