import React from 'react';
import CenterPiece from '../CenterPiece';

export interface ILoadingProps {
    dotType?: string;
}

export const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    const { children, dotType } = props;

    return (
        <div className="text-center">
            <div>
                <div className={dotType} />
            </div>
            {children}
        </div>
    );
};

Loading.defaultProps = {
    dotType: 'dot-bricks'
};

export interface ILoadingComponentProps {
    card?: boolean;
    dotType?: string;
}

export const LoadingComponent: React.FunctionComponent<ILoadingComponentProps> =
    (props) => {
        const { card, children, dotType } = props;

        if (card) {
            return (
                <CenterPiece>
                    <div className="card">
                        <div className="card_body">
                            <Loading dotType={dotType}>{children}</Loading>
                        </div>
                    </div>
                </CenterPiece>
            );
        }
        return <Loading dotType={dotType}>{children}</Loading>;
    };

LoadingComponent.defaultProps = {
    card: true,
    dotType: 'dot-bricks'
};

export default LoadingComponent;
