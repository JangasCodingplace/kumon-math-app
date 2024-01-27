# Getting Started

## Prerequisites

Before diving into building your React Native application using Expo,
ensure you have the following prerequisites set up and ready:

- **Comand field**:
    Tutorial. how To open the Command Prompt (CMD) as an administrator and enter commands,
    follow these steps.
    Windows:
    1. Press the Windows key on your keyboard or click on the Windows icon in the
    taskbar to open the Start menu.
    2. Type "cmd" in the search bar. The Command Prompt app should appear in the search
    results.
    3. Right-click on the Command Prompt app and select "Run as administrator" from the
    context menu. If prompted by User Account Control (UAC), click "Yes" to grant
    administrative privileges.
    4. The Command Prompt window will open with the title "Administrator: Command
    Prompt." You are now ready to enter commands with elevated privileges.
    5. To enter a command, type it directly into the Command Prompt window and press
    Enter on your keyboard. For example, you can type "ipconfig" to display network
    information or "sfc /scannow" to run a system file checker.
    Appel:
    1. Launch Terminal: Open the Finder on your Mac and go to "Applications" >
    "Utilities" > "Terminal". Alternatively, you can use the Spotlight search (press Cmd
    + Space and type "Terminal") to find and open it.
    2. Enter commands: Once you have opened the Terminal, you can enter commands just
    like you would in the Command Prompt on Windows. Simply type the desired
    command and press Enter to execute it.
- **Node.js & npm**
    - **Description**: React Native and Expo depend on Node.js, a 
      JavaScript runtime. The Node.js package comes bundled with npm
      (node package manager) which you'll use to install the necessary
      packages.
    - **Installation**: Visit [Node.js's official website](https://nodejs.org/)
      and download the recommended version for your operating system.
      Once installed, you can check your Node.js and npm versions
      using  the commands `node -v` and `npm -v`, in the command field.
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
    - **Installation in vs**:
    Tutorial. to open a repository in Visual Studio Code via Git, follow these steps:
      1. Install Git: If you haven't already, install Git on your computer. You can download it from
      the official Git website (https://git-scm.com/downloads) and follow the installation
      instructions.
      2. Open Visual Studio Code: Launch Visual Studio Code on your computer.
      3. Open the Command Palette: Press Ctrl + Shift + P (Windows/Linux) or Cmd +
      Shift + P (Mac) to open the Command Palette.
      4. Search for "Git: Clone": In the Command Palette, type "Git: Clone" and select the option
      that appears.
      5. Enter the repository URL: Provide the URL of the repository you want to open. This can be
      the HTTPS or SSH URL of the repository.
      6. Choose a local directory: Select a local directory where you want to clone the repository.
      You can either enter the path manually or browse to the desired location.
      7. Clone the repository: Press Enter to start the cloning process. Visual Studio Code will clone
      the repository from the provided URL to your local directory.
      8. Open the repository: Once the cloning process is complete, Visual Studio Code will
      automatically open the cloned repository.
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

Navigate into the local git project directory and install the dependencies:

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
