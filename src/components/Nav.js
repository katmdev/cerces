import isActive from '../lib/isActive'

const Nav = ({pathname}) => {
    const views = [
        {
            content: 'Menus',
            page: 'menus'
        },
        {
            content: 'Recipes',
            page: 'recipes'
        },
        {
            content: 'Lists',
            page: 'recipes'
        }
    ]
    // if link matches component displayed, change class
    return (
        <nav>
            <ul className="nav">
                <div className="nav__wrapper wrapper">
                    {views.map((view) => {
                        return (
                            <li key={view.page}>
                                {isActive(pathname, view, "nav__link")}
                            </li>
                        )
                    })}
                </div>
            </ul>
        </nav>
    )
};

export default Nav;