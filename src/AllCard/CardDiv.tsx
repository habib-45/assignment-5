
import React, { use } from 'react';
import type { Itechnologies } from "../types/type";
import TecnologeCard from './TecnologeCard';

interface Cardprops {
    technologiespromise :Promise<Itechnologies[]>;
}

const CardDiv = ({technologiespromise}:Cardprops) => {
    const carddiv = use(technologiespromise)
    console.log(carddiv)
    return (
        <div>
           
            <TecnologeCard carddiv={carddiv}>
                 
            </TecnologeCard>
        </div>
    );
};

export default CardDiv;
