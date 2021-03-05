import { ElementType } from "react";

interface IRoute {
    exact?: boolean;
    path: string;
    component: ElementType;
    routes?: IRoute[];
}

export default IRoute;