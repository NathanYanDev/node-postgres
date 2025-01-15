import type { FastifyReply, FastifyRequest } from "fastify";
import type { IDatabase, IVideo } from "../database/models/database-memory";

export class CreateVideo {
	async handle(request: FastifyRequest, reply: FastifyReply, db: IDatabase) {
		const { title, description, duration } = request.body as IVideo;

		db.create({
			title,
			description,
			duration,
		});

		// 201 - Created
		return reply.status(201).send("Vídeo adicionado com sucesso");
	}
}
