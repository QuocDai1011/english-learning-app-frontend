import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import { DefaultLayout } from '~/components/Layouts';
import FooterOnly from '~/components/Layouts/FooterOnly';
import Admin from '~/pages/Admin';

const publicRoutes = [
    { path: '/', component: Introduction, layout:  FooterOnly},
    { path: '/home', component: Home, layout: DefaultLayout },
    { path: '/admin', component: Admin, layout: DefaultLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
