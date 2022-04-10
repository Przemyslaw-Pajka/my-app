const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const serverConfig = require('./serverConfig/serverConfig')
const registrationRoutes = require('./routes/registration')
const getProductsRoutes = require('./routes/getProducts')
const deleteProductRoutes = require('./routes/deleteProduct')
const getCategoriesRoutes = require('./routes/getCategories')

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(getProductsRoutes)
app.use(getCategoriesRoutes)
app.use(deleteProductRoutes)
app.use(registrationRoutes)


app.listen(serverConfig.port, serverConfig.hostname, () => {
    console.log(`Server listening on ${serverConfig.hostname}:${serverConfig.port}!`);
});

