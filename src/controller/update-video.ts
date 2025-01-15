import type { FastifyReply, FastifyRequest } from "fastify";
import type { IDatabase, IVideo } from "../database/models/database-memory";

export class UpdateVideo {
	async handle(
		request: FastifyRequest<{ Params: { id: string } }>,
		reply: FastifyReply,
		db: IDatabase,
	) {
		const videoID = request.params.id;
		const { title, description, duration } = request.body as IVideo;

		db.update(videoID, {
			title,
			description,
			duration,
		});

		return reply.status(204).send();
	}
}
