import { Link } from 'react-router-dom';

const isActive = ({pathname, view, component, children }) => {
    const link = `/${view.page.replace(/\s/g, '-')}`;
        // return (
        //     pathname === path ? 
        //     `${defaultClassName} ${defaultClassName}--active` : 
        //    `${defaultClassName}`
        // )
        return (
            <Link to={link} className={pathname === link ? 
                `${component}__link ${component}__link--active` : 
                `${component}__link`
            }>
                { children }
            </Link>
        )
}

export default isActive;