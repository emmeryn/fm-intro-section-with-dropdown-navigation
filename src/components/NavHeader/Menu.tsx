import './Menu.css'
import {useState} from "react";
import {DropdownCaret} from "./DropdownCaret";
import {SubMenu} from "./SubMenu";
type Props = {
    isOpen: boolean,
    navItems: (
        {
            label: string,
            href: string,
            dropdownItems?: {
                icon?: JSX.Element,
                label: string,
                href: string,
            }[]
        })[]
    userItems: JSX.Element,
};

export const Menu = ({ isOpen, navItems, userItems }: Props) => {
    const [openedDropdown, setOpenedDropdown] = useState(Array(navItems.length).fill(false));

    const NavItemElements = <div>
        {navItems?.map((item, idx) => {
            const isOpen = openedDropdown[idx];
            const onClickHandler = () => {
                const nextValue = [...openedDropdown];
                nextValue[idx] = !isOpen;
                setOpenedDropdown(nextValue);
            };
            return <div className={'NavItem'} key={idx}
                        onClick={onClickHandler}
                        >
                <a href={item.href}>
                    {item.label}
                    {item.dropdownItems ? <DropdownCaret isOpen={isOpen}/> : null}
                </a>
                <SubMenu items={item.dropdownItems} isOpen={isOpen}/>
            </div>
        })}
    </div>;

    return (isOpen && navItems ?
            <div className={'Menu'}>
                {NavItemElements}
                {userItems}
            </div> : null
    )
}