var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

var points = [
  {
    x: 10,
    y: 20,
  },
  {
    x: 12,
    y: 23,
  },
  {
    x: 15,
    y: 29,
  },
];

setInterval(function () {
  points.push({
    x: points[points.length - 1].x + 10,
    y: points[points.length - 1].y + 10,
  });
}, 9000);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("chat message", points);
  setInterval(function () {
    // socket.emit("chat message", points[points.length - 1]);
    socket.emit("chat message", points);
  }, 2000);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
