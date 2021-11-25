import React from 'react';

export interface IHeaderProps {
    height?: string;
    image?: string;
    title: string;
    headline: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const { children, height, image, title, headline } = props;

    return (
        <header className="bg-no-repeat bg-center bg-cover w-full h-[${height}]  ">
            Header
        </header>
    );
};

export default Header;
