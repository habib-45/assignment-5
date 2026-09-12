const Footer = () => {
    return (
        <footer className="container mx-auto bg-white text-slate-500 font-sans border-t border-slate-100">
            <div className="px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-10 md:mb-12">


                    <div className="sm:col-span-2 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white font-bold text-sm px-2 py-1 rounded-md tracking-tight">
                                DS
                            </span>
                            <span className="text-xl font-bold text-slate-900">
                                Dev Stack
                            </span>
                        </div>

                        <p className="text-slate-500 text-sm max-w-xs mb-6 leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>


                <div className="pt-6 sm:pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4 text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;