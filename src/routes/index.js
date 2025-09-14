import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import { DefaultLayout } from '~/components/Layouts';
import FooterOnly from '~/components/Layouts/FooterOnly';
import Admin from '~/pages/Admin';
import CreateLesson from '~/pages/Admin/CreateLesson';

const publicRoutes = [
    { path: '/', component: Introduction, layout:  FooterOnly},
    { path: '/home', component: Home, layout: DefaultLayout },
    { path: '/admin', component: Admin, layout: FooterOnly},
    { path: '/admin/create-lesson', component: CreateLesson, layout: FooterOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
