# Rays React Native Boilerplate

React Native + Babel + MobX + React Native Paper + Code Push + ESLint & Prettier

# Getting Started

Create React Native application

```jsx
react-native init ReactNativeMobX
```

# MobX

Install **MobX** plugins:

```jsx
npm i mobx mobx-react --save
```

# Babel

Install **Babel** plugins for ES7 decorators:

```jsx
npm i --save-dev babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 

npm i --save-dev @babel/plugin-proposal-decorators @babel/plugin-transform-runtime babel-plugin-module-resolver
```

### babel.config.js

This is the Babel plugins configuration

```jsx
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['transform-decorators-legacy'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
```

# ESLint and Prettier

Install **ESLint** and **Prettier** packages

```jsx
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### .eslintrc.js

```jsx
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
};
```

### .prettierrc.js

```jsx
module.exports = {
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};
```

# React Native Paper

Install **react-native-paper** package

```jsx
yarn add react-native-paper
```

Install **react-native-vector-icons**  package

```jsx
yarn add react-native-vector-icons
```

- If you get ***error Could not find the following native modules: RNVectorIcons. Did you forget to run "pod install" ?***

    Follow this command:

    ```jsx
    cd ios  (Move to ios folder)
    pod update
    ```

# React Native Code Push

Install **react-native-code-push** package

```jsx
npm i --save react-native-code-push
```

### iOS Setup

Install all the necessary CocoaPods dependencies.

```jsx
cd ios  (Move to ios folder)
pod install
```

Open up the `AppDelegate.m` file, and add an import statement for the CodePush headers

```jsx
#import <CodePush/CodePush.h>
```

Find the following line of code, which sets the source URL for bridge for production releases:

```jsx
return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
```

Replace it with this line:

```jsx
return [CodePush bundleURL];
```

Add the deployment key to `Info.plist` file's `CodePushDeploymentKey`. You can find the key with the following command:

```jsx
code-push deployment ls <appName> -k 
```

### Android Setup

In your `android/settings.gradle` file, make the following additions:

```jsx
include ':app', ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
```

In your `android/app/build.gradle` file, add the `codepush.gradle` file as an additional build task definition underneath `react.gradle`:

```jsx
...
apply from: "../../node_modules/react-native/react.gradle"
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
...
```

Update the `MainApplication.java` file to use CodePush via the following changes:

```jsx
...
// 1. Import the plugin class.
import com.microsoft.codepush.react.CodePush;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        ...

        // 2. Override the getJSBundleFile method in order to let
        // the CodePush runtime determine where to get the JS
        // bundle location from on each app start
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
    };
}
```

Add the deployment key to `strings.xml` file's `CodePushDeploymentKey`

```jsx
<resources>
     <string name="app_name">AppName</string>
     <string moduleConfig="true" name="CodePushDeploymentKey">DeploymentKey</string>
 </resources>
```

You can find the key with the following command:

```jsx
code-push deployment ls <appName> -k 
```

# React Native Fast Image

Install **react-native-fast-image** package

```jsx
yarn add react-native-fast-image
```

