# HERE Map Themes

This project is a demo application to demonstrate different Base Map themes powered by HERE Maps

``` 
$ git clone <project-repo>
$ cd <project-repo>
$ npm start
```

You might need to create a JavaScript/Rest developer token from HERE Developer Portal (https://developer.here.com/projects/) and replace those in App.js

```
<SimpleHereMap
  app_id="APP_ID_HERE"
  app_code="APP_CODE_HERE"
  lat="42.345978"
  lng="-83.0405"
  zoom="12"
  theme={this.state.theme}
/>
```

### Deploying to firebase

Perform these steps to deploy to firebase 

``` 
 npm install -g firebase-tools
 firebase login
 firebase init
 firebase deploy
 
 Demo -  https://heremap-themes.firebaseapp.com
 
 ```
