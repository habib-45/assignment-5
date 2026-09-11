import { Suspense } from "react";
import CardDiv from "./AllCard/CardDiv";
import Banner from "./component/banner"
import Nav from "./component/nav"
import type { Itechnologies } from "./types/type";


const TechnologiesFatch = async ():Promise<Itechnologies[]> => {
  let res = await fetch("/Carddata.json");
  let data = await res.json();
  return data;
}

function App() {
  const Technologiespromise = TechnologiesFatch();
 
 

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading.........</h2>}>
        <CardDiv technologiespromise={Technologiespromise}></CardDiv>
      </Suspense>


    </>
  )
}

export default App
