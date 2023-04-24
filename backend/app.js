const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")

dotenv.config()

const {sequelize} = require("./models")

const indexRouter = require("./routes")
const projectRouter = require("./routes/project")
const commentRouter = require("./routes/comment")

const app = express()
app.set("port", process.env.PORT || 5000)

const corsOptions = {
	credentials: true,
	origin: "",
}
app.use(cors(corsOptions))

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000")
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
	res.header("Access-Control-Allow-Headers", "Content-Type")
	next()
})

sequelize
	.sync({force: false})
	.then(() => {
		console.log("database connect")
	})
	.catch((err) => {
		console.error(err)
	})

app.use(morgan("dev"))

app.use("/", express.static(path.join(__dirname, "public")))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: process.env.COOKIE_SECRET,
		cookie: {
			httpOnly: true,
			secure: false,
		},
		name: "session-cookie",
	})
)

app.use("/", indexRouter)
app.use("/project", projectRouter)
app.use("/comment", commentRouter)

app.use((req, res, next) => {
	res.status(404).send("Not Found")
})

app.listen(app.get("port"), () => {
	console.log(app.get("port"))
})
