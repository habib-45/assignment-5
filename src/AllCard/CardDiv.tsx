import { use, useState } from 'react';
import type { Itechnologies } from "../types/type";
import TecnologeCard from './TecnologeCard';

interface Cardprops {
    technologiespromise: Promise<Itechnologies[]>;
}

const CardDiv = ({ technologiespromise }: Cardprops) => {

    const carddiv = use(technologiespromise);
    const [card, setCard] = useState<Itechnologies[]>([]);
    const handIaddToCard = (technology: Itechnologies) => {
        if (card.some(item => item.id === technology.id)) {
            return;
        }
        setCard([...card, technology]);
    };
    const handleRemoveFromCard = (id: string) => {
        setCard(card.filter(item => item.id !== id));
    };
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