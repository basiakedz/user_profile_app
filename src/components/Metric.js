export const Metric = (props) => {
    return (
        <div className="metric">
        <p className="output">{props.output}</p>
        <p className="label">{props.label}</p>
        </div>
    );
  };
  