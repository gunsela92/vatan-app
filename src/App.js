import Slider from "./components/slider/slider.component";
import Related from "./components/Related/related.component";
import BestSeller from "./components/BestSeller/best-seller.component";
import Header from "./components/Header/header.component";
import "antd/dist/antd.css";
import './App.css'

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <Header/>
      <Slider/>
      <Related/>
      <BestSeller />
    </div>
  );
}

export default App;
