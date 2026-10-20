import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Flashwork — Cole a spec. Deixe fluir.', description: 'Suas CLIs de IA trabalhando juntas. Orquestração com RAG e harness automáticos por projeto. Conheça o Flashwork, open source.' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
