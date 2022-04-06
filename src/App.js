import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage/HomePage';
import { BANNER, CATEGORY, FEATURED_PRODUCT } from './utils/constants';
import { useGetData } from './utils/hooks/useGetData';

function App() {
  const { data: sliderData, isLoading: sliderLoading } = useGetData(BANNER);
  const { data: carouselData, isLoading: carouselLoading } = useGetData(CATEGORY);
  const { data: gridData, isLoading: gridLoading } = useGetData(FEATURED_PRODUCT);

  const isLoading = !!(sliderLoading || carouselLoading || gridLoading)

  return (
    <div className="App">
      <Header />
      <HomePage
        isLoading={isLoading}
        sliderData={sliderData}
        carouselData={carouselData}
        gridData={gridData}
      />
      <Footer />
    </div>
  );
}

export default App;
