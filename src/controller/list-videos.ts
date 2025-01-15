import type { FastifyRequest, FastifyReply } from "fastify";
import type { IDatabase } from "../database/models/database-memory";

export class ListVideos {
	async handle(
		request: FastifyRequest<{ Querystring: { search: string } }>,
		reply: FastifyReply,
		db: IDatabase,
	) {
		const search = request.query.search;

		const videos = db.list(search);

		return videos;
	}
}
