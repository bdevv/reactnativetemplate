# reactnativetemplate
### React Native Map components for iOS + Android
# Installation
```console
npm install  
```
# Start
```console
npm start or react-native run-android
```
# How to Configure Auth0
## - Configure Auth0
Get Your Application Keys
When you signed up for Auth0, a new application was created for you, or you could have created a new one. You will need some details about that application to communicate with Auth0. You can get these details from the Application Settings section in the Auth0 dashboard.

## - Integrate Auth0 in Your Application
Open your app's build.gradle file (typically at android/app/build.gradle) and add the following manifest placeholders.
```
android {
    defaultConfig {
        // Add the next line
        manifestPlaceholders = [auth0Domain: "{yourDomain}", auth0Scheme: "${applicationId}"]
    }
}
```


## Configure Callback URLs
A callback URL is a URL in your application where Auth0 redirects the user after they have authenticated. The callback URL for your app must be added to the Allowed Callback URLs field in your Application Settings. If this field is not set, users will be unable to log in to the application and will get an error.

### Android callback URL
```
{YOUR_APP_PACKAGE_NAME}://{yourDomain}/android/{YOUR_APP_PACKAGE_NAME}/callback
```

## Add login to your app
Import the useAuth0 hook and the Auth0Provider component from the react-native-auth0 package.

```
import {useAuth0, Auth0Provider} from 'react-native-auth0';
```
in App.js change your domain and client id created in Auth0.com

```
    <Auth0Provider domain={"{yourDomain}"} clientId={"{yourClientId}"}>
    </Auth0Provider>
```

# How to start backend server
```
cd server
npm install
npm start
```
Change mongodb uri with your uri. This server is running on port 8000.
To communicate with backend, run this command in your adb location with powershell.
```
adb.exe reverse tcp:8000 tcp:8000
```
# How to integrate Camera
Input this tag in android/app/src/main/AndroidManifest.xml
```
<uses-permission android:name="android.permission.CAMERA"></uses-permission>
```

# How to integrate Maps
Input this tag in android/app/src/main/AndroidManifest.xml
```
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

<meta-data android:name="com.google.android.geo.API_KEY" android:value="Your Google maps API Key Here"/>
```
