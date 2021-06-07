
/*
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
*/



















// ===============================




















/*
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
*/



















// ===============================




















/*
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
*/



















// ===============================





















// at the beginning of tutorial 10, given all the notes, I created a new file below without
// the notes so we are starting fresh

// import in the Link component
import Link from 'next/link';

// next let's surround the anchor tags with this Link component and then let's add in the
// href attribute to each Link component and remember we add the href to the Link component
// and then inside the Link component we have the anchor tags

// import in the image component
import Image from 'next/image';

// and to use the Image component all we need to do is change " <img src="logo.png" /> " to
// " <Image src="logo.png" /> " and then add a width and height to the image

// another good thing about using the Image component is that next automatically uses lazy
// loading for images so if an image is below the fold it will not be loaded until the
// user scrolls down the page and this optimizes our page loading times


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

