// Add, remove or reorder projects here — the site updates automatically.
// `pattern` picks the animated art shown inside the phone mockup.
// Set `image` to a file in /public (e.g. '/shots/notepad.webp') to show a real screenshot instead.

export type Pattern = 'rings' | 'bars' | 'grid' | 'orbit' | 'wave' | 'stack';

export interface Project {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  repo: string;
  stars?: number;
  accent: [string, string];
  pattern: Pattern;
  image?: string;
}

export interface Resource {
  title: string;
  stat: string;
  description: string;
  repo: string;
}

const gh = (name: string) => `https://github.com/AkshayAshokCode/${name}`;

export const featured: Project[] = [
  {
    title: 'MediaKit',
    kind: 'Android SDK',
    description:
      'A modular Android media SDK. Pick images from the gallery or camera, then crop them — all through a single fluent API.',
    tags: ['Kotlin', 'SDK', 'Camera', 'Crop'],
    repo: gh('MediaKit-android'),
    stars: 2,
    accent: ['#7c5cff', '#22d3ee'],
    pattern: 'stack',
  },
  {
    title: 'DevFocus',
    kind: 'IntelliJ / Android Studio plugin',
    description:
      'A minimal Pomodoro timer built right into Android Studio and IntelliJ IDEA, so developers stay focused without switching tools.',
    tags: ['Kotlin', 'JetBrains Plugin', 'Productivity'],
    repo: gh('DevFocus'),
    stars: 1,
    accent: ['#ff5c8a', '#ffb347'],
    pattern: 'orbit',
  },
  {
    title: 'Android Sensors',
    kind: 'Android app',
    description:
      'A professional sensor toolkit exploring accelerometer, gyroscope and every hardware and software sensor Android exposes.',
    tags: ['Jetpack Compose', 'Sensors', 'Navigation'],
    repo: gh('AndroidSensors'),
    stars: 3,
    accent: ['#00e0a4', '#3b82f6'],
    pattern: 'rings',
  },
  {
    title: 'NotePad',
    kind: 'Android app',
    description:
      'A notes app built with Jetpack Compose, Room, Coroutines, Dagger Hilt and Canvas, following MVVM with clean architecture.',
    tags: ['Compose', 'Room', 'Hilt', 'MVVM'],
    repo: gh('NotePad'),
    stars: 12,
    accent: ['#facc15', '#f97316'],
    pattern: 'grid',
  },
];

export const more: Project[] = [
  {
    title: 'Battery Wallpaper',
    kind: 'Android app',
    description:
      'Updates your wallpaper in real time from battery level and charging state, via a foreground service that survives the app being killed.',
    tags: ['Foreground Service', 'Compose', 'Canvas'],
    repo: gh('AndroidBattery'),
    accent: ['#22c55e', '#a3e635'],
    pattern: 'bars',
  },
  {
    title: 'Image → Text → Speech',
    kind: 'Android app',
    description:
      'Extract text from images with ML text recognition and listen to it instantly in 30+ languages.',
    tags: ['Java', 'ML Kit', 'Text-to-Speech'],
    repo: gh('Image-to-Text-Text-to-Speech-App'),
    stars: 3,
    accent: ['#38bdf8', '#818cf8'],
    pattern: 'wave',
  },
  {
    title: 'YouTube Android',
    kind: 'Android app',
    description:
      'Implementation of YouTube API features on Android — player, live chat, playlists and streaming workflows.',
    tags: ['Kotlin', 'YouTube API', 'Streaming'],
    repo: gh('YoutubeAndroid'),
    stars: 3,
    accent: ['#ef4444', '#f472b6'],
    pattern: 'stack',
  },
];

export const resources: Resource[] = [
  {
    title: 'Android Design Patterns',
    stat: '20+',
    description: 'Creational, structural and behavioral patterns implemented in Kotlin for Android.',
    repo: gh('Android-Design-Patterns'),
  },
  {
    title: 'Android Architectures',
    stat: '5',
    description: 'MVC, MVP, MVVM, MVI and Clean Architecture — each built as the same note-taking app.',
    repo: gh('Android-Architectures'),
  },
  {
    title: 'Android Interview Cheat Sheet',
    stat: '∞',
    description: 'Kotlin, architecture, Jetpack and system design questions for Android interviews.',
    repo: gh('Android-Interview-Questions-cheat-sheet'),
  },
  {
    title: 'iOS Architectures',
    stat: 'iOS',
    description: 'Architecture patterns explored on the Swift side of mobile.',
    repo: gh('iOS-Architectures'),
  },
];
