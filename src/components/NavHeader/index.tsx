import {ReactComponent as Logo} from '../../images/logo.svg';
import {ReactComponent as IconTodo} from '../../images/icon-todo.svg';
import {ReactComponent as IconCalendar} from '../../images/icon-calendar.svg';
import {ReactComponent as IconReminders} from '../../images/icon-reminders.svg';
import {ReactComponent as IconPlanning} from '../../images/icon-planning.svg';
import './index.css';
import {DropdownCaret} from "./DropdownCaret";
import {Dropdown} from "./Dropdown";
import {useState} from "react";
import {MenuButton} from "./MenuButton";
import {Menu} from "./Menu";

const navigationDataItems = [
    {
        label: 'Features',
        href: '#',
        dropdownItems: [
            {icon: <IconTodo/>, label: 'Todo List', href: '#'},
            {icon: <IconCalendar/>, label: 'Calendar', href: '#'},
            {icon: <IconReminders/>, label: 'Reminders', href: '#'},
            {icon: <IconPlanning/>, label: 'Planning', href: '#'},
        ]
    },
    {
        label: 'Company',
        href: '#',
        dropdownItems: [
            {label: 'History', href: '#'},
            {label: 'Our Team', href: '#'},
            {label: 'Blog', href: '#'},
        ]
    },
    {
        label: 'Careers',
        href: '#',
    },
    {
        label: 'About',
        href: '#',
    },
]

export const NavHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openedDropdown, setOpenedDropdown] = useState(-1);

    const logo = <div className={'logo'}>
        <a href={'#'}><Logo/></a>
    </div>;

    const navItems = <div className={'navItems'}>
        {navigationDataItems.map((item, idx) => {
            const isOpen = openedDropdown === idx;
            const onClickHandler = () => {
                if (isOpen) {
                    setOpenedDropdown(-1);
                } else {
                    setOpenedDropdown(idx);
                }
            };
            return <div className={'navItem'} key={idx}
                        onClick={onClickHandler}
                        onBlur={() => setOpenedDropdown(-1)}>
                <a href={item.href}>
                    {item.label}
                    {item.dropdownItems ? <DropdownCaret isOpen={isOpen}/> : null}
                </a>
                <Dropdown items={item.dropdownItems} isOpen={isOpen}/>
            </div>
        })}
    </div>;

    const userItems = <div className={'userItems'}>
        <a href={'#'}>Login</a>
        <a href={'#'} className={'btn-outline'}>Register</a>
    </div>

    const menuButton= <div className={'menuButton'}>
        <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
    </div>

    const menu = <Menu isOpen={isMenuOpen} navItems={navigationDataItems} userItems={userItems}/>

    return (
        <>
            <nav className={'NavHeader'}>
                {logo}
                {navItems}
                {userItems}
                {menuButton}
                {menu}
            </nav>
        </>
    )
}
