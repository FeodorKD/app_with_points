import {RouteProps} from "react-router-dom";
import {CanvasPage} from "../../Pages/Canvas/CanvasPage.async";
import {PointListPage} from "../../Pages/PointList/PointList.async";
import {PointPage} from "../../Pages/PointPage/PointPage.async";
import {MainPage} from "../../Pages/Main/MainPageAsync";


export enum AppRoutes{
    MAIN = 'main',
    POINT_LIST = 'pointList',
    CANVAS = 'canvas',
    POINT = 'pointId'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CANVAS]: '/canvas',
    [AppRoutes.POINT_LIST]: '/point-list',
    [AppRoutes.POINT]: '/point/:id',

}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
      path: RoutePath.main,
      element: <MainPage/>
    },
    [AppRoutes.CANVAS]: {
        path: RoutePath.canvas,
        element: <CanvasPage/>
    },
    [AppRoutes.POINT_LIST]: {
        path: RoutePath.pointList,
        element: <PointListPage/>
    },
    [AppRoutes.POINT]: {
        path: RoutePath.pointId,
        element: <PointPage/>
    },

}