import "./App.css";
import Row from "./components/Row";
import requests from "./api/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchNowplaying}
        isLarfeRow={true}
      />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Top" fetchUrl={requests.fetchToprated} />
      <Row title="Up coming" fetchUrl={requests.fetchUpcoming} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
