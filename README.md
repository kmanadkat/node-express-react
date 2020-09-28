# Node-Express-React
If you are facing 404 errors in Routes of React application while deploying it then you can use this simple Node Express server to fix it.

Below is the code that actually does the job :
```js
// Serving React App
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
```

**Steps To Follow to Setup Project**

- Keep your Built React App (containing `index.html` file) in public folder of this project.
- Run `npm install`
- Run `node app.js`

By default Application is running on PORT 8080 but you can supply commandline argument to run on desired port, as shown below

```
node app.js 8000
```
