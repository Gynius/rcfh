import React from "react";
import NinjaHeader from "../components/NinjaHeader";
import MainTemplate from "../components/MainTemplate";
import VaNinjaLoop from "../components/VaNinjaLoop";
import SubscribeForm from "../components/SubscribeForm";
import AsVANinja from "../components/AsVANinja";
function VaNinja() {
  return (
    <MainTemplate>
      <NinjaHeader />
      <AsVANinja />
      <VaNinjaLoop />
      <SubscribeForm />
    </MainTemplate>
  );
}

export default VaNinja;
