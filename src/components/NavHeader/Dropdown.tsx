import './Dropdown.css'

type Props = { isOpen: boolean, items?: { icon?: JSX.Element, label: string, href: string }[] };

export const Dropdown = ({isOpen, items}: Props) => {
    const dropdownItems = items?.map((item, idx) => {
        return <a href={item.href}>
            {item.icon}
            {item.label}
        </a>
    })
    return (isOpen && items ?
            <div className={'dropdown'}>
                {dropdownItems}
            </div> : null
    )
}