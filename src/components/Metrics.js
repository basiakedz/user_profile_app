import { Metric } from './Metric'


export const Metrics = () => {
    return (
        <div className="metrics-container">
            <Metric output="80K" label="Followers" />
            <Metric output="803K" label="Likes" />
            <Metric output="1.4K" label="Photos" />
    </div>
    );
};