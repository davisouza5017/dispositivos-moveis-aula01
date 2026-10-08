export const TEMA = {
  fundo: '#0f172a',
  superficie: '#1e293b',
  texto: '#f8fafc',
  destaque: '#38bdf8',
  textoSuave: '#94a3b8',
  borda: '#334155',
  card: '#1e293b',
  favorito: '#f59e0b',
  favoritoInativo: '#64748b',
  badgeFundo: '#38bdf8',
  badgeTexto: '#0f172a',
  sucesso: '#10b981',
  chipFundo: '#334155',
  chipAtivoFundo: '#38bdf8',
  chipAtivoTexto: '#0f172a',
} as const;

export type Tema = typeof TEMA;

// Os navegadores recebem cores como valores, em vez de classes NativeWind.
export const CORES_NAVEGACAO = {
  light: {
    fundo: '#FFFFFF', borda: '#E2E8F0', texto: '#0F172A',
    destaque: '#0369A1', inativo: '#64748B',
  },
  dark: {
    fundo: '#0F1B33', borda: '#1D3B73', texto: '#FFFFFF',
    destaque: '#61DAFB', inativo: '#CBD5E1',
  },
} as const;
