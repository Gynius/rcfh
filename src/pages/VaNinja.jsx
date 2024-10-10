import React from "react";
import NinjaHeader from "../components/NinjaHeader";
import MainTemplate from "../components/MainTemplate";
import VaNinjaLoop from "../components/VaNinjaLoop";
import SubscribeForm from "../components/SubscribeForm";
import PerksNBenefits from "../components/PerksNBenefits";
import SystemRequirements from "../components/SystemRequirements";
import { Helmet } from "react-helmet";

function VaNinja() {
  return (
    <MainTemplate>
      <Helmet>
        <title> RFCH | VA Ninja </title>
        <meta
          name="description"
          content="Streamline your operations with our professional Virtual Assistant services, designed to support your business needs and boost productivity."
        />
      </Helmet>
      <NinjaHeader />
      <VaNinjaLoop />
      <SubscribeForm />
      <PerksNBenefits />
      <SystemRequirements />
    </MainTemplate>
  );
}

export default VaNinja;
