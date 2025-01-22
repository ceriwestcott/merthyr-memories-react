import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route to handle the `area` query
server.get('/area', (req, res) => {
    const { area } = req.query;
    if (area && area in router.db.get('area').value()) {
        return res.jsonp(router.db.get('area').get(area).value());
    } else {
        return res.status(404).jsonp({ message: "Area not found" });
    }
});

// Default route
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running on http://localhost:3000');
});
