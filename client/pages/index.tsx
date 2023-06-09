//
import React from "react";
import MainLayouts from "@/layouts/MainLayouts";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const Index = () => {
  const { mode, user } = useTypedSelector((state) => state.user);

  return (
    <>
      <MainLayouts>
        <div className={"center"}>
          <h1>Добро пожаловать!</h1>
          {!mode && <h3>Здесь можно создать список добрых дел</h3>}
          {mode && <h3>{user.name}</h3>}
        </div>
      </MainLayouts>

      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
