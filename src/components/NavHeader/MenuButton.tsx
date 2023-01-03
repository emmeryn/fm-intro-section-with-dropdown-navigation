import {ReactComponent as IconMenu} from '../../images/icon-menu.svg';
import {ReactComponent as IconCloseMenu} from '../../images/icon-close-menu.svg';

type Props = { isOpen: boolean, onClick: () => void };

export const MenuButton = ({ isOpen, onClick }: Props) => {
    return (
        isOpen ? <IconCloseMenu onClick={onClick}/> : <IconMenu onClick={onClick}/>
    )
}