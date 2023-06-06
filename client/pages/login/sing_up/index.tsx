//страница регистрации Sing_Up
import React from "react";
import MainLayouts from "@/layouts/MainLayouts";
import SignUpForm from "@/components/log_sing/sing_up_form";

const Index = () => {
  return (
    <MainLayouts>
      <div>
        <SignUpForm />
      </div>
    </MainLayouts>
  );
};

export default Index;
