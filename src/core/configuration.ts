import { type } from 'os';

// export const ROUTES = {
//   home: '/',
//   product: 'product',
//   software: 'software',
//   hobbies: 'hobbies',
// };

export interface RouteProps {
  routes: Route[];
}

export class Route {
  index: number;
  path: string;
  title: string;

  constructor(index: number, path: string, title: string) {
    this.index = index;
    this.path = path;
    this.title = title;
  }
}

export class Routes {
  private static instance: Routes;
  private routes: Route[];

  private constructor() {
    this.routes = [
      { index: 0, path: '/', title: 'About Me' },
      { index: 1, path: '/product', title: 'Product' },
      { index: 2, path: '/software', title: 'Software' },
      { index: 3, path: '/hobbies', title: 'Hobbies' },
    ];
  }

  public static getRoutes(): Route[] {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }
    return Routes.instance.routes;
  }

  public static getRoute(index: number): Route | null {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }
    for (const route of this.instance.routes) {
      if (index === route.index) {
        return route;
      }
    }
    return null;
  }

  public static getRouteFromPath(path: string): Route {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }

    for (const route of this.instance.routes) {
      if (route.path === path) {
        return route;
      }
    }
    return this.instance.routes[0];
  }
}
