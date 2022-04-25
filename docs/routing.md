# Backend - Routing

`www/` is the directory that contains all of our routing logic. We use
the `express` library to manage our server and REST API.

Generally, we will organize the routing in a similar fashion to how 
Next.js functions. The file name corresponds to the route path. For example,
the file `www/login.ts` corresponds to the endpoint `/login`. This logic
applies to nested functions: `www/lobby/[id].ts` is `/lobby/{id}`.

## Creating Routes

When it comes to applying a route, all route **logic** will be written in
it's corresponding file. The logic will then be imported in `www/index.ts`
to attach it to the express instance.

For example, say I want to create a GET endpoint at `/me`. Here are the following
steps:

1. Create the file `www/me/index.ts`
2. Create a router for all routes to `/me` 
    ```ts
    import {Router} from 'express';
    export const me_router = Router();
    ```
3. Create the logic for the routes you desire
    ```ts
    me_router.get('/', async (req: Request, res: Response) => {
      ...
    });
    ```
4. Add the router for `/me` to `www/index.ts`
    ```ts
    // ROUTES
    import {me_router} from './me';

    app.use('/me', me_router);
    ```