const express = require ('express');
const app = express();
const port = 3000;
const customerFunction = require('./models/customer');
const cors = require('cors');

app.use(cors());

app.post ('/', () => {
    Customer.getCustomer();
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost${port}`);
})