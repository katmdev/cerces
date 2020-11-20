import MakeActive from './MakeActive';
import { MoreHoriz, Person } from '@material-ui/icons';

import Logo from '../assets/LOGO.svg';

const Header = ({ auth, pathname }) => {
    const views = [
        {
            content: <MoreHoriz />,
            page: 'about'
        },
        {
            content: <Person />,
            page: 'settings'
        }
    ]

    return (
        <section className="header">
            <div className="header__wrapper wrapper">
                <div className="header__logo">
                    <img src={Logo} alt="Cerces"/>
                </div>
                <div className="header__links">
                { auth ? 
                    views.map((view) => {
                        return (
                            <span key={view.page}>
                                <MakeActive pathname={pathname} view={view} component="header">
                                    {view.content}
                                </MakeActive>
                            </span>
                        )
                    })
                    : null
                }
                </div>
                    {/* // <div className="header__buttons">
                    //      <Link to='/about' aria-label='about'>
                    //      <span className="header__button">
                    //             <Person />
                    //         </span>
                    //     </Link>
                    //     <Link to='/settings' aria-label='settings'>
                    //         <span className="header__button">
                    //             <MoreHoriz />
                    //         </span>
                    //     </Link>
                    // </div>)  */}
            </div>
        </section>
    )
};

export default Header;