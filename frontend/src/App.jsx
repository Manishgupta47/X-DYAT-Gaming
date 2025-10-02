import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import CustomCursor from "./helper/CustomCursor";
import BackToTop from "./helper/BackToTop";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import TournamentPage from "./pages/TournamentPage";
import ContactPage from "./pages/ContactPage";
import TournamentDetailsPage from "./pages/TournamentDetailsPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import ShopPage from "./pages/ShopPage";
import ExploreProductPage from "./pages/ExploreProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BlogPage from "./pages/BlogPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import LoginPage from "./pages/LoginPage";
import ServicePage from "./pages/ServicePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import CreatorsPage from "./pages/CreatorsPage";




function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
       <CustomCursor />
        <BackToTop />

     
        <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path="/home" element={<HomePageOne />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/tournament' element={<TournamentPage />} />
          <Route exact path='/tournament-details'element={<TournamentDetailsPage />}/>
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='//product-details/:id' element={<ShopDetailsPage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/explore-product' element={<ExploreProductPage />} />
        <Route exact path='/cart' element={<CartPage />} />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        <Route exact path='/blog' element={<BlogPage />} />
        <Route exact path='/help-center' element={<HelpCenterPage />} />
        <Route exact path='/service' element={<ServicePage />} />
        <Route exact path='/creators' element={<CreatorsPage />} />
        <Route exact path='/blog-details' element={<BlogDetailsPage />} />
        
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
