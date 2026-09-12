import type { Itechnologies } from '../types/type';
import { FaStar } from 'react-icons/fa';

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

    return (
        <main className="container mx-auto pb-5">

            <section className="mb-6">
                <h1 className="text-3xl font-bold">
                    Explore the <span className="text-pink-500">Technologies</span>
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {carddiv.map((item) => {

                        const isAdded = card.some(
                            selected => selected.id === item.id
                        );

                        return (
                            <article
                                key={item.id}
                                className="card bg-base-100 border border-gray-100 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
                            >

                                <section>

                                    <header className="flex justify-between items-center mb-3">

                                        <figure>
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </figure>

                                        <button className="btn btn-xs btn-soft btn-success">
                                            {item.badge}
                                        </button>

                                    </header>

                                    <h2 className="font-bold text-lg text-slate-800">
                                        {item.name}
                                    </h2>

                                    <p className="text-xs text-gray-500 my-2 leading-relaxed">
                                        {item.description}
                                    </p>

                                </section>

                                <section>

                                    <div className="flex items-center justify-between text-xs my-4 text-gray-500">

                                        <span className="badge badge-ghost badge-sm">
                                            {item.category}
                                        </span>

                                        <span>
                                            {item.difficulty}
                                        </span>

                                        <p className="flex items-center gap-1 font-semibold text-slate-700">
                                            <FaStar className="text-amber-400" />
                                            {item.rating}
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => handIaddToCard(item)}
                                        disabled={isAdded}
                                        className="btn btn-neutral btn-block btn-sm rounded-lg"
                                    >
                                        {isAdded ? 'Added ✓' : 'Add to Stack'}
                                    </button>

                                </section>

                            </article>
                        );
                    })}

                </section>

                {/* Your Stack */}

                <aside className="lg:col-span-1">

                    <section className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm sticky top-6">

                        <h2 className="font-bold text-lg text-slate-800">
                            Your Stack
                        </h2>

                        <p className="text-xs text-gray-400 mt-1 mb-6">
                            {card.length === 0
                                ? 'No technologies selected yet.'
                                : `${card.length} technologies selected.`
                            }
                        </p>

                        {card.length === 0 ? (

                            <div className="border-2 border-dashed border-gray-100 rounded-xl p-8 text-center text-xs text-gray-300">
                                Your stack is empty.
                            </div>

                        ) : (

                            <>

                                <section className="space-y-3">

                                    {card.map((item) => (

                                        <article
                                            key={item.id}
                                            className="flex items-center justify-between border border-gray-100 rounded-xl p-3"
                                        >

                                            <div className="flex items-center gap-3">

                                                <img
                                                    src={item.icon}
                                                    alt={item.name}
                                                    className="w-8 h-8 object-contain"
                                                />

                                                <div>
                                                    <h3 className="font-semibold text-sm text-slate-800">
                                                        {item.name}
                                                    </h3>

                                                    <p className="text-xs text-gray-400">
                                                        {item.category}
                                                    </p>
                                                </div>

                                            </div>

                                            <button
                                                onClick={() => handleRemoveFromCard(item.id)}
                                                className="text-gray-400 hover:text-red-500 text-xl"
                                            >
                                                ×
                                            </button>

                                        </article>

                                    ))}

                                </section>

                                <button
                                    onClick={handleRemoveAll}
                                    className="btn btn-neutral btn-block btn-sm rounded-lg mt-4"
                                >
                                    Remove All
                                </button>

                            </>

                        )}

                    </section>

                </aside>

            </section>

        </main>
    );
};

export default TecnologeCard;