import { useRouteMatch, useLocation } from 'react-router-dom';

import Nav from './Nav';
import Header from './Header.js'
import Footer from './Footer'

// will contain header, nav, and CTA button
// this will frame all the other components beyond the landing page, and will contain sign up, login, recipes, lists, and menus
const Home = ({ auth, children }) => {
    let { isExact } = useRouteMatch("/");
    let { pathname } = useLocation();
    return (
        <>
            { isExact ? 
                null : 
                <header>
                    <Header auth={auth} pathname={pathname}/>
                    { auth ? 
                        <Nav pathname={pathname}/> 
                        : null 
                    }
                </header>
            }
            <main>
                {children}
            </main>
            {pathname === '/menus' || pathname === '/lists' || pathname === '/recipes' ?
                <footer>
                    <Footer pathname={pathname}/>
                </footer>
                : null 
            }
        </>
    )
};

export default Home;