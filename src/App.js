import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import Home from "./components/homePage/homePage";
import AboutUs from "./components/about/aboutUs";
import Services from "./components/services/services";
// import Portfolio from "./components/Portfolio";
// import Team from "./components/Team";
// import Contact from "./components/Contact";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";
import HomePage from "./components/homePage/homePage";
import Faq from "./components/FAQ/faq";
import ServiceBillPayment from "./components/servicesCard/serviceBillPayment";
import EZCash from "./components/servicesCard/serviceEzCash";
import Gallery from "./components/gallery/gallery";
import Team from "./components/team/team";
import ServiceSimActive from "./components/servicesCard/serviceSim";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/BillPayments"
            element={<ServiceBillPayment />}
          />
          <Route path="/services/EzCash" element={<EZCash />} />
          <Route path="/services/SimcActivation" element={<ServiceSimActive />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/team" component={Team} /> */}
          <Route path="/contact" element={<Faq />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
