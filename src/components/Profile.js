import { Details } from './Details'
import { Logo } from './Logo'
import { Metrics } from './Metrics'


export const Profile = () => {
    return (
        <article className='centered'>
        <div className="main-container">
            <div className='main-container-top'/>
            <Logo />
            <Details />
            <Metrics />
    </div>
    </article>
    );
};