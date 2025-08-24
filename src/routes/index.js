import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import { HeaderAndFooter, DefaultLayout } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Introduction, layout:  null},
    { path: '/home', component: Home, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
