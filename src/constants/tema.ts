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
