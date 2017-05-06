function getRoutes(app, handler) {
	async function catchAll(context) {
		await handler(context.req, context.res);
		context.respond = false;
	}

	async function cafesRoute(context) {
		const {req, res, params} = context;

		await app.render(req, res, '/cafe', params);
		context.respond = false;
	}

	return {
		catchAll,
		cafesRoute
	};
}

module.exports = getRoutes;

