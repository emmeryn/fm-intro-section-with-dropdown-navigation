import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as IconTodo} from '../../images/icon-todo.svg';
import {ReactComponent as IconCalendar} from '../../images/icon-calendar.svg';
import {ReactComponent as IconReminders} from '../../images/icon-reminders.svg';
import {ReactComponent as IconPlanning} from '../../images/icon-planning.svg';
import './index.css';
import {DropdownCaret} from "./DropdownCaret";

const navigation = [
    {
        name: 'Features',
        href: '#',
        dropdownItems: [
            {icon: <IconTodo/>, label: 'Todo List'},
            {icon: <IconCalendar/>, label: 'Calendar'},
            {icon: <IconReminders/>, label: 'Reminders'},
            {icon: <IconPlanning/>, label: 'Planning'},
        ]
    },
    {
        name: 'Company',
        href: '#',
        dropdownItems: [
            {label: 'History'},
            {label: 'Our Team'},
            {label: 'Blog'}
        ]
    },
    {
        name: 'Careers',
        href: '#',
    },
    {
        name: 'About',
        href: '#',
    },
]

export const NavHeader = () => {
    const logo = <div className={'logo'}>
        <a href={'#'}><Logo/></a>
    </div>;
    const navItems: JSX.Element = <div className={'navItems'}>
        {navigation.map((item, idx) => {
            return <div className={'navItem'} key={idx}>
                <a href={item.href}>
                    {item.name}
                    {item.dropdownItems ? <DropdownCaret isOpen={false}/> : null}
                </a>
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
