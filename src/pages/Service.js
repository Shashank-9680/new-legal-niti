import React, { Fragment } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from "../assets/img/about.jpg";

const PageService = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        bgImg={require("../assets/img/page-header.jpg")}
        title="OUR SERVICES"
        content="Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
      />
      <PageAbout
        title={"Our Services"}
        heading="Provide best <br/> Business Solutions"
        thumb={ServiceThumb}
        content="Experience the simplicity, efficiency, and peace of mind that comes with our comprehensive solution. Let us handle the complexities while you focus on building your dreams.
Take the first step towards an effortless startup journey."
      />
      <Services classes="sm-top" />
      <PricingTable />
      <Testimonial />
      <BrandLogo />
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageService;
