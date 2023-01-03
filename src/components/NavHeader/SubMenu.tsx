type Props = { isOpen: boolean, items?: {icon?: JSX.Element, label: string, href: string}[] };

export const SubMenu = ({ isOpen, items }: Props) => {
    const subMenuItems = items?.map((item, idx) => {
        return <a href={item.href}>
            {item.icon}
            {item.label}
        </a>
    })
    return (isOpen && items ?
            <div className={'SubMenu'}>
                {subMenuItems}
            </div> : null
    )
}