import { Link } from 'react-router-dom';

const isActive = (pathname, {page, content}, defaultClassName) => {
    const link = `/${page.replace(/\s/g, '-')}`
        // return (
        //     pathname === path ? 
        //     `${defaultClassName} ${defaultClassName}--active` : 
        //    `${defaultClassName}`
        // )
        return (
            <Link to={link} className={pathname === link ? 
                `${defaultClassName} ${defaultClassName}--active` : 
                `${defaultClassName}`
            }>
                {content}
            </Link>
        )
}

export default isActive;