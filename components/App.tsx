"use client";
import dynamic from "next/dynamic";
import MainContainer from "./MainContainer";
import { LoadingProvider } from "../context/LoadingProvider";
import { Suspense } from "react";

const CharacterModel = dynamic(() => import("./Character"), { ssr: false });

const App = () => {
  return (
    <>
      <LoadingProvider>
        <MainContainer>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </LoadingProvider>
    </>
  );
};

export default App;
