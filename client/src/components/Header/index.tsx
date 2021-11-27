import React from 'react';

export interface IHeaderProps {
    height?: string;
    image?: string;
    title: string;
    headline: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const { children, image, title, headline } = props;

    return (
        <header className="relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:h-[700px]">
            <img src={image} alt="blog_banner"></img>
            <div className="absolute top-1/2 w-full text-center">
                <h1 className="text-black mt-5 mb-2">{title}</h1>
                <h3 className="mb-5 text-black">{headline}</h3>
                {children}
            </div>
        </header>
    );
};

Header.defaultProps = {
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
};

export default Header;
