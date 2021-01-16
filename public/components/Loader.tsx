import { FC } from "react";

const Loader: FC<{ isGlobal: boolean }> = (props) => {
  return (
    <div id={props.isGlobal ? "loading-page" : "loading-nav" }>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
}

export default Loader;
