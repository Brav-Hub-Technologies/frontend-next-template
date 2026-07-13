/* src/app/layout.tsx */
import type { Metadata } from 'next';
import '@/styles/globals.css';

import { Cabecalho } from '@/components/layout/Cabecalho/Cabecalho';

export const metadata: Metadata = {
  title: 'Template Frontend Empresa 2026',
  description: 'Projeto base com Next.js e CSS Modules atualizado',
};

export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}