import {ReactComponent as Logo} from '../../images/logo.svg';
import './index.css';

const navigation = [
    {name: 'Features', href: '#'},
    {name: 'Company', href: '#'},
    {name: 'Careers', href: '#'},
    {name: 'About', href: '#'},
]

export const NavHeader = () => {
    const logo = <div className={'logo'}>
        <a href={'#'}><Logo/></a>
    </div>;
    const navItems: JSX.Element = <div className={'navItems'}>
        {navigation.map((item, idx) => {
            return <div className={'navItem'}>
                <a href={item.href}>{item.name}</a>
            </div>
        })}
    </div>;
    const userItems: JSX.Element = <div className={"userItems"}>
        <a href={'#'}>Login</a>
        <a href={'#'} className={'btn-outline'}>Register</a>
    </div>

    return (
        <>
            <nav>
                {logo}
                {navItems}
                {userItems}
            </nav>
        </>
    )
}
