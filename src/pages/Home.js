import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import { requests } from "../requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row id="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row id="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row id="3" title="Horror" fetchURL={requests.requestHorror} />
      <Row id="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row id="5" title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
