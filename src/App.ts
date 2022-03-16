import express, { Express } from 'express';
import './db/Connection';

class App {
	readonly express: Express;

	constructor() {
		this.express = express();

		this.middlewares();
	}

	middlewares(): void {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
	}
  
}

export default new App().express;