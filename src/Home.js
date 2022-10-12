import React from "react";
import { connect } from "react-redux";
import { mappropstodispatch, mappropstostate } from "./redux/Mapping";

const Home = (props) => {
  return (
    <div className="alldata">
      <button onClick={() => props.fetch()}>Fetch Data</button>
      {props.show && <>
        {props.user_data === [] ? (
          <>
            <p>Loading.........</p>
          </>
        ) : (
          <>
            {props.user_data.map((i) => {
              return <p>{i.title}</p>;
            })}
          </>
        )}
      </>}
    </div>
  );
};

export default connect(mappropstostate, mappropstodispatch)(Home);
