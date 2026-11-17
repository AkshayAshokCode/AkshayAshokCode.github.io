// Secondary projects listed under GameDay on the home page.
// Order follows the GitHub profile README (Shipped table, then Featured), then site-only repos.

const gh = (name: string) => `https://github.com/AkshayAshokCode/${name}`;

export const otherWork = [
  {
    title: 'Android Sensors',
    description: 'A toolkit for reading and visualising every hardware and software sensor Android exposes.',
    tech: 'Kotlin · Compose',
    url: gh('AndroidSensors'),
  },
  {
    title: 'DevFocus for VS Code',
    description: 'A focus timer and day planner for VS Code, Cursor and other VS Code-based editors.',
    tech: 'TypeScript · VS Code extension',
    url: gh('vscode-devfocus'),
  },
  {
    title: 'BackOnline',
    description: 'Get an alarm or a notification the moment your internet is back, on phones and Android TV.',
    tech: 'Kotlin · Compose',
    url: gh('BackOnline'),
  },
  {
    title: 'DevFocus',
    description: 'A Pomodoro timer that lives inside Android Studio and IntelliJ IDEA.',
    tech: 'Kotlin · IntelliJ plugin',
    url: gh('DevFocus'),
  },
  {
    title: 'MediaKit',
    description: 'Android SDK for picking images from the gallery or camera and cropping them, through one fluent API.',
    tech: 'Kotlin · SDK',
    url: gh('MediaKit-android'),
  },
  {
    title: 'YoutubeAndroid',
    description: 'A ready-made starting point for building YouTube features on Android, with 13 drop-in examples.',
    tech: 'Kotlin · Reference',
    url: gh('YoutubeAndroid'),
  },
  {
    title: 'NotePad',
    description: 'A notes app built with Compose, Room, Coroutines and Hilt, following MVVM and clean architecture.',
    tech: 'Kotlin · Compose',
    url: gh('NotePad'),
  },
  {
    title: 'Android Architectures',
    description: 'The same note-taking app built five ways: MVC, MVP, MVVM, MVI and Clean Architecture.',
    tech: 'Kotlin · Reference',
    url: gh('Android-Architectures'),
  },
  {
    title: 'Android Design Patterns',
    description: '20+ creational, structural and behavioural patterns implemented in Kotlin for Android.',
    tech: 'Kotlin · Reference',
    url: gh('Android-Design-Patterns'),
  },
];
