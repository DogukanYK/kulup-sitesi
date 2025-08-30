"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Tema her zaman LIGHT: sistem/dark yok
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      forcedTheme="light"
    >
      {children}
    </ThemeProvider>
  );
}