import React from 'react';
import { Link } from 'react-router-dom';
import {
    House,
    LibraryBig,
    ChartNoAxesColumnIncreasing,
    Upload,
    Settings,
    Moon,
    Share2
} from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-[#15161E]">
            <div className="mx-auto max-w-7xl py-5">
                <div className="flex justify-between">
                    <div className="">
                        <Link to="/">
                            <span className="text-[#2AC3DE] text-lg tracking-wide font-semibold uppercase">
                                Type
                            </span>
                            <span className="text-[#9ECE6A] text-lg font-semibold uppercase">
                                Speed
                            </span>
                        </Link>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <Link to="/" className="flex gap-2 group items-center">
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                <House />
                            </span>
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                Home
                            </span>
                        </Link>
                        <div className="h-7 w-px bg-gray-600 mx-4"></div>
                        <Link
                            to="/books"
                            className="flex gap-2 group items-center"
                        >
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                <LibraryBig />
                            </span>
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                Books
                            </span>
                        </Link>
                        <div className="h-7 w-px bg-gray-600 mx-4"></div>
                        <Link
                            to="/stats"
                            className="flex gap-2 group items-center"
                        >
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                <ChartNoAxesColumnIncreasing />
                            </span>
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                Stats
                            </span>
                        </Link>
                        <div className="h-7 w-px bg-gray-600 mx-4"></div>
                        <Link
                            to="/uploads"
                            className="flex gap-2 group items-center"
                        >
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                <Upload />
                            </span>
                            <span className="text-[#9AA5CE] group-hover:text-[#2AC3DE] transition-colors">
                                Upload
                            </span>
                        </Link>
                    </div>
                    <div className="flex gap-7">
                        <span className="text-[#9AA5CE] hover:text-[#2AC3DE]">
                            <Moon />
                        </span>
                        <span className="text-[#9AA5CE] hover:text-[#2AC3DE]">
                            <Share2 />
                        </span>
                        <span className="text-[#9AA5CE] hover:text-[#2AC3DE]">
                            <Settings />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
