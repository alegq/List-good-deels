//страница авторизации Login
import React from "react";
import MainLayouts from "@/layouts/MainLayouts";
import LogInForm from "@/components/log_sing/log_in_form";

const Index = () => {
  return (
    <MainLayouts>
      <div>
        <LogInForm />
      </div>
    </MainLayouts>
  );
};

export default Index;
