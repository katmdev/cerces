import Logo from '../assets/LOGO.svg';
import { Link } from 'react-router-dom';

// will contain logo, explainer copy, login button, and sign up button
const Landing = () => {
    return (
        <section className="landing">
            <div className="wrapper landing__wrapper">
                <div className="image__container">
                    <img src={Logo} alt="Cerces"/>
                </div>
                <h3>Meal planning sucks.</h3>
                <h2>We make it easy.</h2>
                <ul className="landing__buttons">
                    <li className="button button--primary">
                        <Link to='/signup'>
                            Sign Up
                        </Link>
                    </li>
                    <li className="button button--secondary">
                        <Link to='/login' >
                            Log In
                        </Link>
                    </li>
                </ul>
                {/* <button className="secondary" onClick={(e)=> handleClick(e)} >
                    Log In
                </button>
                <button className="primary" onClick={(e) => handleClick(e)} >
                    Sign Up
                </button> */}
            </div>
        </section>
    )
};

export default Landing;