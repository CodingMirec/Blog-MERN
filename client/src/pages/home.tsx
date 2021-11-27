import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import IPageProps from '../interfaces/page';

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
    return (
        <div className="p-0">
            <Navigation />
            <Header title="Best Blog Site" headline="New info from the world" />
            <div className="mt-5 ">Blog stuff here...</div>
        </div>
    );
};

export default HomePage;
