import MakeActive from './MakeActive';
import MakeSvg from './MakeSvg';

const Nav = ({ pathname }) => {
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
            page: 'lists'
        }
    ]
    // if link matches component displayed, change class
    return (
        <nav className="topNav">
            <div className="wrapper">
                <ul className="nav__links">
                    {views.map((view) => {
                        return (
                            <li key={view.page}>
                                <MakeActive pathname={pathname} view={view} component="nav">
                                    <MakeSvg component="nav">
                                        {view.content}
                                    </MakeSvg>
                                </MakeActive>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
};

export default Nav;