import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[#15161E]">
            <div className="mx-auto max-w-7xl py-5">
                <div className="flex">
                    <div className="">
                        <Link to="/">
                            <span className="text-[#2AC3DE] text-lg uppercase">
                                Type
                            </span>
                            <span className="text-[#9ECE6A] text-lg uppercase">
                                Speed
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
