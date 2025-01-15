import type { FastifyReply, FastifyRequest } from "fastify";
import type { IDatabase } from "../database/models/database-memory";

export class DeleteVideo {
	handle(
		request: FastifyRequest<{ Params: { id: string } }>,
		reply: FastifyReply,
		db: IDatabase,
	) {
		const videoID = request.params.id;

		db.delete(videoID);

		return reply.status(204).send();
	}
}
