# Steps to setup frontend seperately:

1. Install **node.js** from https://nodejs.org/en/download/ if not installed.
2. Goto **front-end** folder inside terminal.
3. Run `npm install create-react-app -g` if you want create new project otherwise goto step 4 directly.
4. Run `npm install`.


# For development mode serving.
1. Run `npm start`.
2. Automatically browser will open with '**localhost:3000/**'. If not you can write same on url.
3. Goto **front-end/src/Constants/ElmLoader.jsnd change **BaseURL** variable to your server url. If you are using localhost, server url will be your **IP Address**.
4. For custom port, change to in `package.json` : **"start": "PORT=5000 react-scripts start"**


# For production build serving.
1. Run `npm run build` to generate production build.
2. Run `npm install serve -g` if serve is not installed.
4. Run `npm install pm2 -g` if serve is not installed.
5. Run `pm2 start application-prod-configuration.json` command.
6. Now you can open production build at **localhost:3000/** on browser.

