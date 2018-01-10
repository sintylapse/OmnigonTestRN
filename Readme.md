# Omnigon Test Task
This applications allows you to make requests to provided endpoint with repeatable iterations.
You can change settings by taping on Settings icon from the left bottom corner.

To start the app you need to follow this guide https://facebook.github.io/react-native/docs/getting-started.html, in the tab "Build projects with native code".

#### Build and debug on IOS
- plug in device or use emulator
- build project from XCode or run ```react-native run-ios``` this command from the root of the project

#### Build and debug on Android
- Plug device in
- Use adb reverse to prevent errors:
```
cd C:\Users\user\AppData\Local\Android\sdk\platform-tools
adb reverse tcp:8081 tcp:8081
```
#### Build Debug APK
- go to android
```
cd android
```
- generate the build using gradle
```
./gradlew assembleRelease
```
- generated APK is situated at ..\android\app\build\outputs\apk

### Use to build .apk publish version
- place tbins-release-key.keystore to android/app folder (for keystore generation see https://facebook.github.io/react-native/docs/signed-apk-android.html)
```
npm run deploy:android
```
- then install it to device:
```
adb install android/app/build/outputs/apk/app-release.apk
```
###Testing the release build of your app
Before uploading the release build to the Play Store, make sure you test it thoroughly. First uninstall any previous version of the app you already have installed. Install it on the device using:
```
react-native run-android --variant=release
```

### Notes
- for error
```
ERROR  EPERM: operation not permitted
```
use
```
cd android
./gradlew clean
```

- for error
```
Execution failed for task ':app:installDebug'.
> com.android.builder.testing.api.DeviceException: com.android.ddmlib.InstallException: Failed to finalize session : INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.hagnosticnews signatures do not match the previously installed version; ignoring!
```
uninstall app on the device

- move assets files to "build", "public" and "src" folders manually, because typescript cant do this for the mob app

- for error
```
ERROR  Failed to finalize session : INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.omnigontestrn signatures do n
ot match the previously installed version; ignoring!
```
use
```
cd C:\Users\user\AppData\Local\Android\sdk\platform-tools
adb uninstall "com.omnigontestrn"
```
- for error
```
Failed to extract native libraries, res=-18
```
clear device storage space

- for IOS error
When build successful but packager throws this error:
```
UnhandledPromiseRejectionWarning: Unhandled promise rejection
```
- Clear watchman watches: ```watchman watch-del-all```
- Delete the node_modules folder: ```rm -rf node_modules && npm install```
- Reset packager cache: ```rm -fr $TMPDIR/react-*``` or ```npm start -- --reset-cache```
