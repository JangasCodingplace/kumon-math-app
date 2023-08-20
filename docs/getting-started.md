# Getting Started

## Prerequisites

Before diving into building your React Native application using Expo,
ensure you have the following prerequisites set up and ready:

- **Node.js & npm**
    - **Description**: React Native and Expo depend on Node.js, a 
      JavaScript runtime. The Node.js package comes bundled with npm
      (node package manager) which you'll use to install the necessary
      packages.
    - **Installation**: Visit [Node.js's official website](https://nodejs.org/)
      and download the recommended version for your operating system.
      Once installed, you can check your Node.js and npm versions
      using `node -v` and `npm -v`, respectively.
- **Expo CLI**
    - **Description**: The Expo CLI tool helps you initialize,
      develop, and manage your React Native projects. It's a
      command-line interface tool that streamlines the process and
      comes with the advantages of the Expo ecosystem.
    - **Installation**: Once Node.js and npm are installed, you can
      install Expo CLI globally using the following command: 
      `npm install -g expo-cli`.
- **Git**
    - **Description**: Git is a distributed version control system.
      While not strictly necessary for React Native development, it's
      recommended for versioning and collaborating on your code.
    - **Installation**: Depending on your OS, there are various ways
      to install Git. Refer to the [official documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
      for detailed steps.
- **Expo Go (Client App)**
    - **Description**: Expo Go is a mobile app available for Android
      and iOS that allows you to run your React Native projects
      developed with Expo directly on your device, without needing to
      go through the process of building the app.
    - **Installation**: Download _Expo Go_ from the App Store for iOS
      devices or the Google Play Store for Android devices.

## Installation and Local Setup

After installing the prerequisites, you can now install the project.
Make sure node and npm are installed and run the following commands:

```sh
node -v
npm -v
```

Expected output:
```sh
v20.3.0
9.6.7
```

Navigate into the project directory and install the dependencies:

```sh
cd YOUR_LOCAL_PATH_TO_PROJECT
npm install
```

**Warning (Bug)** 

A [workaround for iOS](https://github.com/BenJeau/react-native-draw/issues/63)
is required. After installing the dependencies, follow the steps

1. Remove `index.min.js` from `node_modules/@luncheon/simplify-svg-path`
2. In `package.json` of `node_modules/@luncheon/simplify-svg-path`,
   remove `index.min.js` from files and replace `index.min.js` with 
   `index.js`


## Quickstart

After installing the dependencies, you can start the project using
the following command:

```sh
npm run start
```

This will start the Expo CLI and a QR Code will be displayed in the
terminal. You can scan this QR Code using the Expo Go app on your
device to run the app.
