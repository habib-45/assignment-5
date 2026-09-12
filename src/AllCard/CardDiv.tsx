import { use, useState } from 'react';
import type { Itechnologies } from "../types/type";
import TecnologeCard from './TecnologeCard';

interface Cardprops {
    technologiespromise: Promise<Itechnologies[]>;
}

const CardDiv = ({ technologiespromise }: Cardprops) => {

    const carddiv = use(technologiespromise);

    const [card, setCard] = useState<Itechnologies[]>([]);

    // Add to Stack
    const handIaddToCard = (technology: Itechnologies) => {

        // একই technology আবার add হবে না
        if (card.some(item => item.id === technology.id)) {
            return;
        }

        setCard([...card, technology]);
    };

    // Single technology remove
    const handleRemoveFromCard = (id: string) => {
        setCard(card.filter(item => item.id !== id));
    };

    // Remove All
    const handleRemoveAll = () => {
        setCard([]);
    };

    return (
        <div>

            <TecnologeCard
                carddiv={carddiv}
                card={card}
                handIaddToCard={handIaddToCard}
                handleRemoveFromCard={handleRemoveFromCard}
                handleRemoveAll={handleRemoveAll}
            />

        </div>
    );
};

export default CardDiv;