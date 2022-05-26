import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import { requests } from "../requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default Home;
