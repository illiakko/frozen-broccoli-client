import React from 'react';
import { Navbar } from './Navbar'

function Layout({ children }) {
    return (
        <React.Fragment>
            <div>
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    );
}

export default Layout