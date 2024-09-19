import React from "react";
import NinjaHeader from "../components/NinjaHeader";
import MainTemplate from "../components/MainTemplate";
import VaNinjaLoop from "../components/VaNinjaLoop";
import SubscribeForm from "../components/SubscribeForm";
function VaNinja() {
  return (
    <MainTemplate>
      <NinjaHeader />
      <VaNinjaLoop />
      <SubscribeForm />
    </MainTemplate>
  );
}

export default VaNinja;
