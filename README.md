## [Socket.io](https://socket.io/) & [ngrok](https://ngrok.com/) express app

Example intended to test socket.io and ngrok to push the same live updates to multiple clients

## Setup having node installed on your machine

### terminal 1

```
npm install
node index.js
```

### terminal 2

```
npx ngrok http 3000
```

### note: ngrok needs to listen on the same port as the node app

### browser:

- open 1 tab at http://localhost:3000
- and 1 tab on the link provided by ngrok in terminal 2
- see live updates in both (red rectangle moving along x,y on the screen)
