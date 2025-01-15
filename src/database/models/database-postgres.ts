import { randomUUID } from "node:crypto";
import { sql } from "./db";

export interface IVideo {
	title: string;
	description: string;
	duration: number;
}

export interface IDatabase {
	list: (search?: string) => void;
	create: (video: IVideo) => void;
	update: (id: string, video: IVideo) => void;
	delete: (id: string) => void;
}

export class DatabasePostgres {
	public async list(search = "") {
		let videos: IVideo[];

		if (search)
			videos =
				await sql`select * from videos where title ilike ${`%${search}%`}`;
		else videos = await sql`select * from videos`;

		return videos;
	}

	public async create(video: IVideo) {
		const videoID = randomUUID();
		const { title, description, duration } = video;

		await sql`insert into videos (id, title, description, duration) values (${videoID}, ${title}, ${description}, ${duration})`;
	}

	public async update(id: string, video: IVideo) {
		const { title, description, duration } = video;

		await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`;
	}

	public async delete(id: string) {
		await sql`delete from videos where id = ${id}`;
	}
}
