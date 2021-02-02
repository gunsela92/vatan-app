import Slider from "./components/slider/slider.component";
import Related from "./components/Related/related.component";
import BestSeller from "./components/BestSeller/best-seller.component";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <Slider/>
      <Related/>
      <BestSeller />
    </div>
  );
}

export default App;
