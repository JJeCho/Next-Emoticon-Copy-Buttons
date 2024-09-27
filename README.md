
# Next.js Emoticon Copy Clouds

This project is a Next.js application that provides a cute, interactive frontend where emojis and emoticons float by on clouds. Users can click on the clouds to copy the corresponding emoji or emoticon text to their clipboard. The app is built using Next.js and styled with Tailwind CSS.

## Features

- **Interactive Design**: Emojis and emoticons float across the screen on clouds. Clicking on a cloud copies the corresponding text to your clipboard.
- **Responsive Layout**: The app adapts to different screen sizes, making the floating emojis work seamlessly on both desktop and mobile.
- **Copy to Clipboard**: Clicking on any cloud copies the associated emoji or emoticon to your clipboard.
- **Custom Fonts**: The project uses local fonts to enhance the design experience.
- **Next.js**: Powered by Next.js, leveraging its server-side rendering and static generation capabilities.
- **Tailwind CSS**: Efficiently styled using the utility-first Tailwind CSS framework.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=14.x)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Next-Emoticon-Copy-Buttons.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Next-Emoticon-Copy-Buttons
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Project

To start the development server, use:

```bash
npm run dev
```

or for yarn:

```bash
yarn dev
```

Visit `http://localhost:3000` in your browser to view the app.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

or for yarn:

```bash
yarn build
```

This will generate the production-ready files in the `.next` folder.

### Running the Production Build

After building the project, you can run the production version locally using:

```bash
npm run start
```

or for yarn:

```bash
yarn start
```

### Linting

To check for linting issues, run:

```bash
npm run lint
```

### Customization

- **Emoticons**: You can customize the set of emoticons by editing the data file in the `src/data/emoticon.ts`.
- **Styling**: The project uses Tailwind CSS, and you can easily modify the design by changing the utility classes in the `src` components.

### Deployment

For deploying the application, you can use platforms like **Vercel**, **Netlify**, or any other service that supports Next.js apps.

## Project Structure

- `src/app/page.tsx`: Main homepage component that renders the floating clouds with emoticons.
- `src/app/layout.tsx`: Defines the overall layout of the app.
- `tailwind.config.ts`: Configuration file for Tailwind CSS.
- `next.config.mjs`: Configuration file for Next.js.

## License

This project is licensed under the MIT License.
