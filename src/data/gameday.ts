// GameDay product page content, taken from docs/PRODUCT_STORY.md in the GameDay repo.
// Update this file when the story changes; both /gameday/ and the home page read from it.

const shot = (name: string) => `/gameday/shots/${name}.jpg`;

export const gameday = {
  url: 'https://itsgameday.vercel.app',
  playStore: 'https://play.google.com/store/apps/details?id=app.itsgameday.android',
  oneLiner: 'GameDay organises your weekly game, so the group chat can go back to banter.',
  summary: 'One link in the group chat handles who’s in, which day, the teams and who has paid.',
  tagline: 'Under the floodlights. The weekly game, minus the group-chat chaos.',
  audience:
    'For friend groups who play a regular game together — 5-a-side football, cricket, badminton — and the one person who always ends up organising it.',
  platforms: ['Web', 'Android', 'iOS'],
  availability: 'On Google Play and the web. The native iOS app is built and ready for its first App Store submission.',

  heroShots: [
    { src: shot('01-group'), alt: 'Group screen with a live day poll and the next game' },
    { src: shot('06-pay'), alt: 'Payment screen with a Pay with UPI button and who has paid' },
    { src: shot('05-teams'), alt: 'Two balanced teams with captains, keepers and positions' },
  ],

  problemIntro: 'Every weekly game runs on a WhatsApp group. WhatsApp is good for talking about the game and bad for organising it.',
  problems: [
    {
      title: '“Who’s in?” archaeology',
      body: '47 messages, three “in”s, one “maybe”, and the organiser counting heads on their fingers on Thursday night. The count is always out of date.',
    },
    {
      title: 'Picking a day',
      body: '“Sat or Sun?” turns into a 60-message negotiation, and the people who can’t make any day never say so.',
    },
    {
      title: 'Too many, too few',
      body: 'The turf fits 10 and 13 say yes. Nobody keeps a waitlist, and when someone drops out, nobody tells the next person.',
    },
    {
      title: 'Teams',
      body: 'Picked by whoever argues loudest. The strong players end up together, both keepers on one side, and someone feels left out.',
    },
    {
      title: 'Money',
      body: 'One person pays ₹1,800 up front, then sends “bro, payment?” one message at a time. ₹1,800 between 11 people doesn’t even split evenly.',
    },
    {
      title: 'No-shows',
      body: 'People who say “in” and don’t turn up face no consequence, and nobody keeps track.',
    },
  ],
  problemOutro:
    'The organiser carries all of it. GameDay is designed around making their week easier, while keeping each player’s part to one or two taps.',

  features: [
    {
      shot: shot('02-session'),
      alt: 'Session screen showing You’re in, a guest, captain and keeper volunteering and position chips',
      title: 'One tap to commit',
      points: [
        'The organiser creates a session and everyone answers “Are you in?” with one tap.',
        'The headcount is live and the same for everyone, including who hasn’t answered yet — so you nudge only those people.',
        'Bring a named guest: they count towards the headcount, get a spot on a team, and their share is added to yours.',
        'When the turf is full, the next person goes onto a waitlist and is promoted and notified automatically if someone drops out.',
      ],
    },
    {
      shot: shot('03-daypoll'),
      alt: 'Day poll with candidate days, vote bars and voter names',
      title: 'Let the group pick the day',
      points: [
        'The organiser offers candidate days and times, and everyone ticks the ones that work.',
        '“None of these work for me” is an answer too, so silence and “can’t make it” are no longer the same thing.',
        'One reminder goes to anyone who hasn’t answered in 24 hours, and the organiser is nudged to lock the day in.',
      ],
    },
    {
      shot: shot('05-teams'),
      alt: 'Team A and Team B with captains, goalkeepers and positions',
      title: 'Fair teams in one tap',
      points: [
        'Form teams deals everyone into two squads with a card-shuffle reveal — random, but balanced.',
        'Volunteer captains are split one per team, goalkeepers and preferred positions are spread evenly, players’ ratings even out the strength of the two sides, and team sizes stay within one.',
        'The organiser can then move or swap players, add a late arrival and share the team sheet to WhatsApp.',
      ],
    },
    {
      shot: shot('04-split'),
      alt: 'Payment setup with before, after or at the turf, and a whole-turf price of ₹1,800',
      title: 'Split the turf, to the rupee',
      points: [
        'Pay before the game for turfs that want money upfront, after the game when the price might be negotiated, or at the turf counter.',
        'Enter ₹150 each, or the turf’s total. GameDay splits the total Splitwise-style: whole rupees that add up exactly.',
        'Any member can be the one who paid the turf. Price and timing are remembered per turf for next time.',
      ],
    },
    {
      shot: shot('06-pay'),
      alt: 'Pay ₹180 with UPI button and a live list of who has paid',
      title: 'No more “bro, payment?”',
      points: [
        'One button opens GPay, PhonePe or Paytm with the amount filled in. There’s a QR code and copy-UPI-ID fallback too.',
        'When you come back, GameDay asks “Paid ₹150 to Arjun?”, so marking it paid is one tap.',
        'The collector sees a live “collected so far” bar, paid and pending lists, and up to three polite automatic reminders go out.',
      ],
    },
    {
      shot: shot('07-owe'),
      alt: 'Profile showing games played and pending payments across groups',
      title: 'Know what you owe',
      points: ['Your profile shows every payment you still owe, across all your groups, with a tap through to pay.'],
    },
    {
      shot: shot('08-streaks'),
      alt: 'Game card with 10 of 10 confirmed and a top streaks leaderboard',
      title: 'Showing up counts',
      points: [
        'Attendance is marked after every game. Everyone is assumed to have turned up, so the organiser only unticks the no-shows.',
        'Turning up builds a streak, and a leaderboard shows who turns up and who pays — gentle, public accountability.',
      ],
    },
  ],

  extras: [
    { title: 'Feedback after the game', body: 'For 48 hours after a game, rate anyone you played with: 1–5 stars plus “Liked” and “Work on” tags. Always anonymous, no free text, and “My game” on your profile shows only you how you’re doing.' },
    { title: 'Player pages', body: 'Tap any name to see that player’s position, attendance and streak, plus their UPI ID with a Copy button — or “Ask for it” if they haven’t added one.' },
    { title: 'Turfs, remembered', body: 'Save the turfs your group plays at with a map pin. “Map” opens the turf’s real Google Maps listing, or tap Call to ring them.' },
    { title: 'Suggestions, not side-chats', body: 'Players suggest a different turf or time, and the organiser applies or dismisses it in one tap.' },
    { title: 'Invites that just work', body: 'One link opens the app on Android or iPhone if it’s installed, or the store or website, and lands you in the group. Sign in with Google or Apple.' },
    { title: 'Notifications that matter', body: 'New game, day picked, teams out, off the waitlist, payment due, kickoff in 2 hours, your feedback is in. Asked for right at sign-in, and each type can be turned off.' },
    { title: 'Group admin', body: 'Admins edit group details, add or remove admins and remove members.' },
    { title: 'Safety and privacy', body: 'Report and block, public privacy and terms pages, and full account deletion from the app or the web.' },
  ],

  design: [
    { title: 'A turf at night', body: 'Everything is dark except what matters, with one floodlight-yellow action per screen.' },
    { title: 'A floodlit icon', body: 'A floodlight tower beside a football pitch at night, its beam lighting the goal end. The pitch fades into the dark before the edges, so no phone’s icon shape crops it. At tiny sizes it becomes just the lamp head on its pole.' },
    { title: 'The floodlight comes on', body: 'The apps and website open on the floodlight switched off; after a dark beat the lamps, beam and pitch warm up together, in about a second. One curve shared by Android, iOS and the web, and skipped with Reduce Motion.' },
    { title: 'Buttons that press in', body: 'NeoPop buttons physically depress, and numbers count up instead of jumping.' },
    { title: 'Small celebrations', body: 'Locking in your spot, the squad reveal, settling the last payment and streak milestones each get a moment.' },
    { title: 'Mobile-first', body: 'Because that’s where the group chat is. Every screen is checked at large font sizes and on narrow phones.' },
  ],

  decisions: [
    {
      title: 'Design for the organiser, one tap for players',
      body: 'Every feature was weighed by whether it saves the organiser work without adding steps for players.',
    },
    {
      title: 'Pay before or after, decided by how turfs work',
      body: 'Some turfs need money upfront; some prices get negotiated on the day. A third option, pay at the turf, covers groups where everyone pays the counter.',
    },
    {
      title: 'Splitwise-style rounding',
      body: '₹1,800 between 11 people is ₹163.64 each, which nobody can pay. GameDay charges ₹164 or ₹163 so the total is exact, and leftover rupees go to the collector first.',
    },
    {
      title: 'No fake payment confirmation',
      body: 'UPI apps don’t reliably report whether a payment went through, so GameDay doesn’t pretend. It brings you back and asks one honest question: “Paid ₹X to Y?”',
    },
    {
      title: '“None of these days” is data',
      body: 'Treating silence and “none work” differently tells the organiser who’s really out, and stops reminders going to people who already answered.',
    },
    {
      title: 'Reminders are capped',
      body: 'At most three payment reminders, one poll reminder and one organiser nudge. The app shouldn’t become the nagging friend.',
    },
    {
      title: 'Mark no-shows, not attendees',
      body: 'Attendance defaults to everyone turned up, so the organiser only unticks the few who didn’t.',
    },
    {
      title: 'Feedback from friends, without the fallout',
      body: 'Criticism from friends stings, so feedback is anonymous, private to the player, and tags only — “Work on” tags are worded as advice, in amber rather than red. Teams still need an honest number, so stars balance teams even when a player keeps their rating hidden.',
    },
  ],

  engineering: [
    {
      title: 'Three native clients, one backend',
      body: 'A Next.js 16 / React 19 web app, a Kotlin + Jetpack Compose Android app and a SwiftUI iOS app share the same API and Supabase Postgres database. The OpenAPI contract is generated from zod schemas, so the mobile clients stay in step.',
    },
    {
      title: 'Security by design',
      body: 'All writes go through the API with validation and permission checks, and the database rejects direct client writes. Reads use row-level security, so you only see your own groups.',
    },
    {
      title: 'Production in Mumbai',
      body: 'The API and database moved from Sydney and the US to Mumbai with zero data loss, to sit close to Indian users. Skeleton screens and instant tap feedback mean the app is never blank.',
    },
    {
      title: 'Sign-in on locked-down networks',
      body: 'Corporate DNS filters blocked Firebase’s default sign-in domain, so sign-in now runs through GameDay’s own domain via a proxy, with no change for users.',
    },
    {
      title: 'Scheduled jobs',
      body: 'Postgres cron runs kickoff reminders, day-poll follow-ups and payment nudges every 15 minutes.',
    },
    {
      title: 'Analytics without location',
      body: 'Product analytics are recorded server-side for every platform, with crash reporting in the apps. IP-based location lookup is turned off everywhere.',
    },
    {
      title: 'Tested on every change',
      body: 'Unit tests cover what would hurt most if it broke — exact payment splits, balanced teams, feedback summaries, streaks — and run with a type check and an API-contract check on every pull request.',
    },
    {
      title: 'Tested across platforms',
      body: 'A separate staging database, Playwright end-to-end tests in the browser, and Android emulators and the iOS simulator driven by UI automation against staging.',
    },
    {
      title: 'Release pipeline',
      body: 'Vercel deploys from GitHub Actions, signed Android App Bundles with Play App Signing, and versioned GitHub releases.',
    },
  ],
  stack: ['Next.js', 'React', 'TypeScript', 'Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'Supabase', 'Postgres', 'Firebase', 'PostHog'],

  numbers: [
    { value: '3', label: 'platforms: web, Android, iOS' },
    { value: '90+', label: 'merged pull requests across web, Android and iOS' },
    { value: '45', label: 'API operations' },
    { value: '26', label: 'database migrations' },
    { value: '120+', label: 'unit tests, run in CI on every pull request' },
  ],

  timeline: [
    { date: 'Jul 2026', text: 'First version: groups, invite links, Google sign-in, voting with guests and a waitlist, day polls, random teams, UPI payments, turfs and streaks.' },
    { date: 'Oct 2026', text: 'Native Android and iOS apps on a shared API, with push notifications, invite links that open the app, and kickoff and payment reminders.' },
    { date: 'Oct 2026', text: 'Balanced teams with captains, keepers and positions; production moved to Mumbai; analytics and crash reporting.' },
    { date: 'Oct 2026', text: 'Android app live on Google Play.' },
    { date: '20 Oct 2026', text: 'Pay before, after or at the turf; whole-turf prices split to the rupee; “Paid ₹X to Y?” after UPI; smarter day polls.' },
    { date: '24 Oct 2026', text: 'Turf contact: open the turf’s Google Maps listing or call it in one tap.' },
    { date: '10 Nov 2026', text: 'A new floodlight icon, replacing the generic ball.' },
    { date: '14 Nov 2026', text: 'Post-game feedback and player pages, on the web, Android and iPhone. Ratings now balance teams.' },
    { date: '15 Nov 2026', text: 'The floodlight comes on: a launch animation across all three platforms, and the iOS app ready for the App Store.' },
  ],

  next: ['Player cards built from ratings, and box cricket feedback tags.', 'Play Store production rollout and the App Store launch.'],

  legal: [
    { label: 'Privacy', href: 'https://itsgameday.vercel.app/privacy' },
    { label: 'Terms', href: 'https://itsgameday.vercel.app/terms' },
    { label: 'Support', href: 'https://itsgameday.vercel.app/support' },
  ],
};
