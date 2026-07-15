import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'TravelMate 360 AI', description: 'Your Journey. Your DNA. Reimagined by AI.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
