## Socket.io & ngrok example to push the same live updates to multiple clients

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

### open browser at http://localhost:3000 and on the link provided by ngrok in terminal 2

### note: ngrok needs to listen on the same port as the node app
