import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splashScreen } from "vite-plugin-splash-screen";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splashScreen({
      logoSrc: "./splash/Flag_of_Okinawa_Prefecture.svg",
      loaderType: "dots", // Type of loader animation
      loaderBg: "#ffc0cb", // Light pink background color for the loader
      minDurationMs: 2000,
      fadeOutDuration: 1000, // Duration (in milliseconds) of the fade-out animation when hiding the splash screen
      fullscreen: true, // If true, the splash screen takes up the full screen
      text: "Happy Mother's Day", // Text to display on the splash screen
      textColor: "#ffffff", // Color of the text displayed on the splash screen
      style: {
        // Additional CSS styles to apply to the splash screen
        borderRadius: '10px',
        border: '2px solid #ffffff'
      }
    })
  ],
  base: '/vite/',
});
