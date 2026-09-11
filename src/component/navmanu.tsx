import { useState } from "react";

const Navmanu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Technologies",
        "Projects",
        "About",
        "Contact",
    ];

    return (
        <>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="block px-6 py-3 text-white"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navmanu;