import {ReactComponent as IconArrowDown} from '../../images/icon-arrow-down.svg';
import {ReactComponent as IconArrowUp} from '../../images/icon-arrow-up.svg';

type Props = { isOpen: boolean };

export const DropdownCaret = ({ isOpen }: Props) => {
    return (
        isOpen ? <IconArrowUp/> : <IconArrowDown/>
    )
}