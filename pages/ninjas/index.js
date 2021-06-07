
/*
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
*/

















// ===============================




















/*
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

/*
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
*/

















// ===============================




















/*
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
*/

















// ===============================





















// at the beginning of tutorial 12, given all the notes, I created a new file below without
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

// next, we want to link to the user details page and the user we link to will be based on the
// route parameter

// import in the Link component
import Link from 'next/link';

// change " <div key={ user.id }></div> " below to
// " <Link href={ `/ninjas/${ user.id }` } key={ user.id }></Link> "


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

