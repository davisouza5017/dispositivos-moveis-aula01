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
