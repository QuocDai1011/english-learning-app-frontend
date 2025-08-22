import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import { HeaderOnly, DefaultLayout } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Introduction, layout:  HeaderOnly},
    { path: '/home', component: Home, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
