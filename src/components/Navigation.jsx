import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Merthyr Memories</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li>
                        <details>
                            <summary>More</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><Link to="#">Link 1</Link></li>
                                <li><Link to="#">Link 2</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
