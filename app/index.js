const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req, res) => 
    res.send(`appid: ${appid} home page`)
);

app.listen(appid, () => console.log(`App is listen on port ${appid}...`))