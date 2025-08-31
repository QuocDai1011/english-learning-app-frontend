import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import { DefaultLayout } from '~/components/Layouts';
import FooterOnly from '~/components/Layouts/FooterOnly';

const publicRoutes = [
    { path: '/', component: Introduction, layout:  FooterOnly},
    { path: '/home', component: Home, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
