
interface NavmanuProps {
    menuOpen: boolean;
    setMenuOpen: (value: boolean) => void;
    menuItems: string[];
}

const Navmanu = ({
    menuOpen,
    setMenuOpen,
    menuItems
}: NavmanuProps) => {

    if (!menuOpen) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-md md:hidden">

            {menuItems.map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-slate-700 font-semibold hover:bg-gray-100"
                >
                    {item}
                </a>
            ))}

        </div>
    );
};

export default Navmanu;

