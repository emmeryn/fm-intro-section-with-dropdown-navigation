import {ReactComponent as ClientAudiophile} from '../../images/client-audiophile.svg';
import {ReactComponent as ClientDatabiz} from '../../images/client-databiz.svg';
import {ReactComponent as ClientMaker} from '../../images/client-maker.svg';
import {ReactComponent as ClientMeet} from '../../images/client-meet.svg';
import './index.css';

export const Content = () => {
    return <div className={'Content'}>
        <h1>Make remote work</h1>
        <p>
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
        </p>
        <a href={'#'} className={'btn-solid'}>Learn more</a>
        <div className={'clients'}>
            <ClientDatabiz/>
            <ClientAudiophile/>
            <ClientMeet/>
            <ClientMaker/>
        </div>
    </div>
}