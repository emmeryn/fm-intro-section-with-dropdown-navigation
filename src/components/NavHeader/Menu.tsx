import './Menu.css'
import {useState} from "react";
import {DropdownCaret} from "./DropdownCaret";
import {Dropdown} from "./Dropdown";
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
    const [openedDropdown, setOpenedDropdown] = useState(-1);

    const navItemElements = <div>
        {navItems?.map((item, idx) => {
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

    return (isOpen && navItems ?
            <div className={'menu'}>
                {navItemElements}
                {userItems}
            </div> : null
    )
}