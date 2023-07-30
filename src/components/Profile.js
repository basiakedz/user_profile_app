import { Details } from "./Details";
import { Logo } from "./Logo";
import { Metrics } from "./Metrics";

export const Profile = () => {
  return (
    <div className="centered">
      <img
        src="/bg-pattern-top.svg"
        alt="Pattern-top"
        className="bg-pattern bg-pattern-top"
      />
      <img
        src="/bg-pattern-bottom.svg"
        alt="Pattern-bottom"
        className="bg-pattern bg-pattern-bottom"
      />
      <div className="main-container">
        <div />
        <img
          className="main-container-top"
          src="/bg-pattern-card.svg"
          alt="Pattern card"
        />
        <Logo />
        <Details />
        <Metrics />
      </div>
    </div>
  );
};
