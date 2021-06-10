const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 9000;

app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use((req, res, next) => {
    console.log(req.ip);
    console.log('\n\n');
    next()
})

app.get('/', cors(), (req, res) => {
    res.json({
        name: "Aloy",
        nationality: "Indian"
    });
})

app.listen(port, () => {
    console.log(`server started on ${port}`);
});
