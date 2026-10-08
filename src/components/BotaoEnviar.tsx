import { Pressable, Text } from 'react-native';

interface BotaoEnviarProps {
  aoPressionar: () => void;
  enviando: boolean;
  texto: string;
  textoEnviando: string;
}

export function BotaoEnviar({ aoPressionar, enviando, texto, textoEnviando }: BotaoEnviarProps) {
  return (
    <Pressable onPress={aoPressionar} disabled={enviando} accessibilityRole="button"
      accessibilityState={{ disabled: enviando }}
      className={`rounded-full py-4 items-center mt-2 ${enviando ? 'bg-slate-200 dark:bg-superficie' : 'bg-sky-600 dark:bg-destaque active:opacity-80'}`}>
      <Text className={`font-bold ${enviando ? 'text-slate-500 dark:text-suave' : 'text-white dark:text-fundo'}`}>
        {enviando ? textoEnviando : texto}
      </Text>
    </Pressable>
  );
}
