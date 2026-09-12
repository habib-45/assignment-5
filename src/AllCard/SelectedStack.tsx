import { toast } from "react-toastify";
import type { Itechnologies } from "../types/type";

interface SelectedStackProps {
    card: Itechnologies[];
    handleRemove: (item: Itechnologies) => void;
    handleRemoveAll: () => void;
}

const SelectedStack = ({
    card,
    handleRemove,
    handleRemoveAll
}: SelectedStackProps) => {

    return (
        <>
            <div className="space-y-3">

                {card.map((item) => (
                    <div
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
                            onClick={() => handleRemove(item)}
                            className="text-gray-400 hover:text-red-500 text-xl"
                        >
                            ×
                        </button>

                    </div>
                ))}

            </div>

            <button
                onClick={() => {
                    handleRemoveAll();
                    toast.success("All technologies removed!");
                }}
                className="btn btn-neutral btn-block btn-sm rounded-lg mt-4"
            >
                Remove All
            </button>
        </>
    );
};

export default SelectedStack;
