import React from 'react';
import Link from 'next/link';
import estilos from './Cabecalho.module.css';

export function Cabecalho() {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.logo}>Meu Sistema</div>
      <nav className={estilos.navegacao}>
        <Link href="/" className={estilos.link}>
          Início
        </Link>
        <Link href="/login" className={estilos.link}>
          Login
        </Link>
      </nav>
    </header>
  );
}
