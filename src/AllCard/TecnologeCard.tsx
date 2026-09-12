import type { Itechnologies } from '../types/type';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SelectedStack from './SelectedStack';

interface TecnologeCardProps {
    carddiv: Itechnologies[];
    card: Itechnologies[];
    handIaddToCard: (technology: Itechnologies) => void;
    handleRemoveFromCard: (id: string) => void;
    handleRemoveAll: () => void;
}

const TecnologeCard = ({
    carddiv,
    card,
    handIaddToCard,
    handleRemoveFromCard,
    handleRemoveAll
}: TecnologeCardProps) => {

    const handleAdd = (item: Itechnologies) => {
        handIaddToCard(item);
        toast.success(`${item.name} added to your stack!`);
    };

    const handleRemove = (item: Itechnologies) => {
        handleRemoveFromCard(item.id);
        toast.error(`${item.name} removed!`);
    };

    return (
        <div className="container mx-auto pb-5">

            <div className="mb-6">
                <h1 className="text-3xl font-bold">
                    Explore the <span className="text-pink-500">Technologies</span>
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {carddiv.map((item) => {

                        const isAdded = card.some(
                            selected => selected.id === item.id
                        );

                        return (
                            <div
                                key={item.id}
                                className="card bg-base-100 border border-gray-100 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
                            >
                                <div>

                                    <div className="flex justify-between items-center mb-3">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="w-10 h-10 object-contain"
                                        />

                                        <button className="btn btn-xs btn-soft btn-success">
                                            {item.badge}
                                        </button>
                                    </div>

                                    <h2 className="font-bold text-lg text-slate-800">
                                        {item.name}
                                    </h2>

                                    <p className="text-xs text-gray-500 my-2 leading-relaxed">
                                        {item.description}
                                    </p>

                                </div>

                                <div>

                                    <div className="flex items-center justify-between text-xs my-4 text-gray-500">
                                        <span className="badge badge-ghost badge-sm">
                                            {item.category}
                                        </span>

                                        <span>{item.difficulty}</span>

                                        <span className="flex items-center gap-1 font-semibold text-slate-700">
                                            <FaStar className="text-amber-400" />
                                            {item.rating}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleAdd(item)}
                                        disabled={isAdded}
                                        className="btn btn-neutral btn-block btn-sm rounded-lg"
                                    >
                                        {isAdded ? 'Only Select ✓' : 'Add to Stack'}
                                    </button>

                                </div>
                            </div>
                        );
                    })}

                </div>


                <div className="lg:col-span-1">

                    <div className="border border-gray-100 rounded-2xl p-6 bg-white top-6">

                        <h2 className="font-bold text-lg text-slate-800">
                            Your Stack
                        </h2>

                        <p className="text-xs text-gray-400 mt-1 mb-6">
                            {card.length === 0
                                ? 'No technologies selected yet.'
                                : `${card.length} technologies selected.`}
                        </p>

                        {card.length === 0 ? (

                            <div className="border-2 border-dashed border-gray-100 rounded-xl p-8 text-center text-xs text-gray-300">
                                Your stack is empty.
                            </div>

                        ) : (
                            <SelectedStack
                                card={card}
                                handleRemove={handleRemove}
                                handleRemoveAll={handleRemoveAll}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TecnologeCard;