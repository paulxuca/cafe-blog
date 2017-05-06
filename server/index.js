const Koa = require('koa');
const Router = require('koa-router');
const nextApp = require('next');
const routes = require('./routes');

const app = nextApp({dev: process.env.NODE_ENV !== 'production'});
const handler = app.getRequestHandler();

function handlePrepared() {
	const server = new Koa();
	const router = new Router();

	const preparedRoutes = routes(app, handler);

	router.get('/cafe/:slug', preparedRoutes.cafesRoute);
	router.get('*', preparedRoutes.catchAll);

	server.use(async (context, next) => {
		context.res.statusCode = 200;
		await next();
	});

	server.use(router.routes());
	server.listen(process.env.PORT, err => {
		if (err) {
			console.log(err);
			throw new Error(err);
		}

		console.log(`> started on port ${process.env.PORT}`);
	});
}


module.exports = () => {
	app.prepare().then(handlePrepared);
};
