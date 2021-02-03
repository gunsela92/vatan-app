import Slider from "./components/slider/slider.component";
import Related from "./components/Related/related.component";
import BestSeller from "./components/BestSeller/best-seller.component";
import Header from "./components/Header/header.component";
import GlobalState from "./components/Context/bestSeller-context";
import Footer from "./components/Footer/footer.component";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <GlobalState>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Slider />
        <Related />
        <BestSeller />
        <Footer/>
      </div>
    </GlobalState>
  );
}

export default App;
