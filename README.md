## Creating server with Node

import { createServer } from "node:http";

const server = createServer((request, response) => {
	response.write("Olá pessual");

	response.end();
});

server.listen(3333);