import { Application } from "./app";

const app = new Application();

const appInstance = app.appInstance();

const portNum = Number.parseInt(process.env.PORT as string, 10);

appInstance.listen({ port: portNum ?? 3333 });
