import { randomUUID } from "node:crypto";

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

export class DatabaseMemory {
	#videos = new Map();

	public list(search?: string) {
		return Array.from(this.#videos.entries())
			.map((videoArray) => {
				const id = videoArray[0];
				const data = videoArray[1];

				return {
					id,
					...data,
				};
			})
			.filter((video) => {
				if (search) return video.title.includes(search);
				return true;
			});
	}

	public create(video: IVideo) {
		const videoId = randomUUID();

		this.#videos.set(videoId, video);
	}

	public update(id: string, video: IVideo) {
		this.#videos.set(id, video);
	}

	public delete(id: string) {
		this.#videos.delete(id);
	}
}
