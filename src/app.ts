import { fastify, type FastifyInstance } from "fastify";
import { DatabaseMemory } from "./database/models/database-memory";
import { CreateVideo } from "./controller/create-video";
import { ListVideos } from "./controller/list-videos";
import { UpdateVideo } from "./controller/update-video";
import { DeleteVideo } from "./controller/delete-video";
import { DatabasePostgres } from "./database/models/database-postgres";

// const db = new DatabaseMemory();
const db = new DatabasePostgres();

export class Application {
	private app: FastifyInstance;

	constructor() {
		this.app = fastify();
		this.routes();
	}

	private routes() {
		this.app.get<{ Querystring: { search: string } }>(
			"/videos",
			(request, reply) => new ListVideos().handle(request, reply, db),
		);
		this.app.post("/video", (request, reply) =>
			new CreateVideo().handle(request, reply, db),
		);
		this.app.put<{ Params: { id: string } }>("/video/:id", (request, reply) =>
			new UpdateVideo().handle(request, reply, db),
		);
		this.app.delete<{ Params: { id: string } }>(
			"/video/:id",
			(request, reply) => new DeleteVideo().handle(request, reply, db),
		);
	}

	public appInstance() {
		return this.app;
	}
}
