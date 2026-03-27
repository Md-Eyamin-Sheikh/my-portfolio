"use client";
import MainContainer from "./MainContainer";
import { LoadingProvider } from "../context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <MainContainer />
      </LoadingProvider>
    </>
  );
};

export default App;
