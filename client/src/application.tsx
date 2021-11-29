import React, { useEffect, useReducer, useState } from 'react';
import { Switch, RouteChildrenProps, Route } from 'react-router-dom';
import LoadingComponent from './components/LoadingComponent';
import routes from './config/routes';
import UserContext, {
    initialUserState,
    UserContextProvider,
    userReducer
} from './contexts/user';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, initialUserState);
    const [loading, setLoading] = useState<boolean>(true);

    // Used for Debugging
    const [authStage, setAuthStage] = useState<string>(
        'Checking localstorage ...'
    );

    useEffect(() => {
        setTimeout(() => {
            CheckLocalStorageForCredentials();
        }, 1000);
    }, []);

    /*Check to see if we have a token
    If we do verify it with backend then
    If not, we are logged out initially
    */
    const CheckLocalStorageForCredentials = () => {
        setAuthStage('Checking credentials ...');

        const fire_token = localStorage.getItem('fire_token');

        if (fire_token === null) {
            userDispatch({ type: 'logout', payload: initialUserState });
            setAuthStage('No credentials found');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } else {
            // Validate with backend
            setAuthStage('No credentials found, validating ...');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const userContextValues = {
        userState,
        userDispatch
    };

    if (loading) {
        return <LoadingComponent>{authStage}</LoadingComponent>;
    }

    return (
        <UserContextProvider value={userContextValues}>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            render={(routeProps: RouteChildrenProps<any>) => (
                                <route.component {...routeProps} />
                            )}
                        />
                    );
                })}
            </Switch>
        </UserContextProvider>
    );
};

export default Application;

/*
 */
