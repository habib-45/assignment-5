import { Suspense } from "react";
import CardDiv from "./AllCard/CardDiv";
import Banner from "./component/banner";
import Nav from "./component/nav";
import type { Itechnologies } from "./types/type";
import Footer from "./component/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TechnologiesFatch = async (): Promise<Itechnologies[]> => {
    let res = await fetch("/Carddata.json");
    let data = await res.json();
    return data;
};

function App() {
    const Technologiespromise = TechnologiesFatch();

    return (
        <>
            <Nav />
            <Banner />

            <Suspense fallback={<h2>Loading.........</h2>}>
                <CardDiv
                    technologiespromise={Technologiespromise}
                />
            </Suspense>

            <Footer />

            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </>
    );
}

export default App;