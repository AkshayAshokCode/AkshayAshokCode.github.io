// GameDay is the featured project; everything in `otherWork` is listed below it.

export const gameday = {
  url: 'https://itsgameday.vercel.app',
  tagline: 'The weekly game, minus the group-chat chaos.',
  summary:
    'One link in the WhatsApp group handles voting, headcount, the waitlist, teams and payments for friend groups who play every week.',
  facts: [
    { label: 'Role', value: 'Solo — product, design, Android, iOS, web and backend' },
    { label: 'Platforms', value: 'Android · iOS · Web, on one shared API' },
    { label: 'Status', value: 'Live on the web, native apps in pre-release' },
    { label: 'Since', value: 'July 2026' },
  ],
  problem:
    '“Football this Saturday?” Forty-seven messages later: three ins, a maybe, nobody sure which turf, and the organiser counting heads on their fingers. Nine of twelve turn up, and the chasing for turf money begins.',
  tour: [
    {
      image: '/gameday/group.jpg',
      alt: 'GameDay group screen showing the next session with 4 of 12 confirmed and a streak leaderboard',
      title: 'The week at a glance',
      body: 'Opening a group shows the next session, the live headcount, who has confirmed and who is on a streak.',
    },
    {
      image: '/gameday/voting.jpg',
      alt: 'Session screen with I’m in and I’m out buttons, a guest counter and the confirmed list',
      title: 'One tap to commit',
      body: 'Players tap in or out and can bring guests. Once the turf is full, extra players join a waitlist and move up automatically when someone drops out.',
    },
    {
      image: '/gameday/day-poll.jpg',
      alt: 'Day poll listing three candidate days with vote bars and a lock-in button',
      title: 'Let the group pick the day',
      body: 'When nobody can agree on a day, everyone marks the days that work and the organiser locks in the winner.',
    },
    {
      image: '/gameday/squads.jpg',
      alt: 'Attendance list and two randomised squads, Team A and Team B',
      title: 'Fair teams in one tap',
      body: 'Teams are shuffled so captains, keepers and positions are spread evenly, and the organiser can still move players by hand.',
    },
    {
      image: '/gameday/payments.jpg',
      alt: 'Payments screen with a UPI QR code, amount owed and a collection progress bar',
      title: 'Settling up',
      body: 'Each player’s share is worked out when the session ends. They pay the collector by UPI QR code or deep link, and a live bar shows how much has come in.',
    },
  ],
  engineering: [
    {
      title: 'One API for every client',
      body: '34 typed operations in Next.js route handlers. The OpenAPI contract the native apps build against is generated from the same zod schemas that validate requests.',
    },
    {
      title: 'Permissions in the database',
      body: 'Supabase Postgres with row-level security. Clients can only read their own groups, and every write goes through the API.',
    },
    {
      title: 'Native apps',
      body: 'Android in Kotlin and Jetpack Compose, iOS in Swift and SwiftUI. Invite links open straight into the app through App Links and Universal Links.',
    },
    {
      title: 'One identity everywhere',
      body: 'Firebase sign-in (Google, plus Apple on iOS) is exchanged for a Supabase-compatible token, so the same account works on all three platforms.',
    },
    {
      title: 'Reminders and push',
      body: 'Kickoff, wrap-up and payment reminders run on Postgres cron every 15 minutes and go out through FCM and APNs.',
    },
    {
      title: 'A small design system',
      body: '“Floodlit”: a turf at night. Everything stays dark except the one action that matters, and moments like the squad reveal get a small animation.',
    },
  ],
  stack: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Next.js', 'TypeScript', 'Supabase', 'Postgres', 'Firebase'],
};

const gh = (name: string) => `https://github.com/AkshayAshokCode/${name}`;

export const otherWork = [
  {
    title: 'MediaKit',
    description: 'Android SDK for picking images from the gallery or camera and cropping them, through one fluent API.',
    tech: 'Kotlin · SDK',
    url: gh('MediaKit-android'),
  },
  {
    title: 'DevFocus',
    description: 'A Pomodoro timer that lives inside Android Studio and IntelliJ IDEA.',
    tech: 'Kotlin · IntelliJ plugin',
    url: gh('DevFocus'),
  },
  {
    title: 'Android Sensors',
    description: 'A toolkit for reading and visualising every hardware and software sensor Android exposes.',
    tech: 'Kotlin · Compose',
    url: gh('AndroidSensors'),
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
