import React from 'react';

export interface ICenterPieceProps {
    card?: boolean;
    dotType?: string;
}

const CenterPiece: React.FunctionComponent<ICenterPieceProps> = (props) => {
    const { children } = props;

    return (
        <div className="container p-0">
            <div className="container flex justify-center absolute left-1/2 top-1/2 transform translate-y-1/2 translate-x-1/2">
                {children}
            </div>
        </div>
    );
};

export default CenterPiece;
