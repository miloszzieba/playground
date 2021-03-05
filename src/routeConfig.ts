import IRoute from "./common/routing/IRoute";

import PageNotFound from "./common/routing/PageNotFound"
import FormFirstPage from "./form/FormFirstPage";
import FormSecondPage from "./form/FormSecondPage";
import FormThirdPage from "./form/FormThirdPage";

const routes : IRoute[] = [
    {
        exact: true,
        path: "/",
        component: FormFirstPage
    },
    {
        path: "/page/1",
        component: FormFirstPage
    },
    {
        path: "/page/2",
        component: FormSecondPage
    },
    {
        path: "/page/3",
        component: FormThirdPage
    },
    {
        path: "/",
        component: PageNotFound
    }
];

export default routes;