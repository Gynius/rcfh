import React from "react";
import NinjaHeader from "../components/NinjaHeader";
import MainTemplate from "../components/MainTemplate";
import VaNinjaLoop from "../components/VaNinjaLoop";
import SubscribeForm from "../components/SubscribeForm";

import PerksNBenefits from "../components/PerksNBenefits";
import SystemRequirements from "../components/SystemRequirements";
function VaNinja() {
  return (
    <MainTemplate>
      <NinjaHeader />

      <VaNinjaLoop />

      <SubscribeForm />
      <PerksNBenefits />
      <SystemRequirements />
    </MainTemplate>
  );
}

export default VaNinja;
