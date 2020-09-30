import { lazy } from 'react';
import { BasicViewProps } from '#types';

type Visibility = 'public' | 'private' | 'anonymous';
// public: Available for all user
// private: Only available for logged-in user
// anonymous: Only available for not logged-in user (eg: login, register, reset-password pages)

export interface Route {
    path: string;
    name: string;
    title: string;
    load: React.ExoticComponent<BasicViewProps>;
}

export interface FallbackRoute {
    default: false;
    path: undefined;
    name: string;
    title: string;
    load: React.ExoticComponent<BasicViewProps>;

    visibility?: Visibility;
}

export type SomeRoute = Route | FallbackRoute;

const routeSettings: SomeRoute[] = [
    {
        path: '/',
        name: 'home',
        title: 'Chrono-Home',
        load: lazy(() => import('../views/Home')),
    },
    {
        path: undefined,
        name: 'fourHundredFour',
        title: '404',
        load: lazy(() => import('../views/FourHundredFour')),
        default: false,
    },
];

export default routeSettings;
