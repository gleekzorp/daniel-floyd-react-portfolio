# Daniel Floyds React Portfolio Application

React application to showcase work that I have done.  I have the ability to add, edit, and delete blog and portfolio items for authorized users.

I originally had this hosted on Heroku but didn't like the free tier putting it to sleep.  I recently added functionality to host on netlify.

- The following code was added for `netlify` in the `prod.config.js` file.  Remove these if you want to go back to `heroku`.
```javascript
const CreateFileWebpack = require('create-file-webpack');

new CreateFileWebpack({
  path: path.resolve(__dirname, "../dist"),
  fileName: "_redirects",
  content: "/*    /index.html   200",
}),
```