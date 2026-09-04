import React from 'react';
import { Pressable, ScrollView, Text } from 'react-native';

interface FiltroCategoriasProps {
  categorias: string[];
  selecionada: string;
  aoSelecionar: (categoria: string) => void;
}

export const FiltroCategorias: React.FC<FiltroCategoriasProps> = ({
  categorias,
  selecionada,
  aoSelecionar,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2 items-center"
      className="mb-4"
    >
      {categorias.map((categoria) => {
        const ativa = categoria === selecionada;
        const nomeFormatado =
          categoria.charAt(0).toUpperCase() + categoria.slice(1);

        return (
          <Pressable
            key={categoria}
            onPress={() => aoSelecionar(categoria)}
            accessibilityRole="button"
            accessibilityLabel={`Filtrar por categoria ${nomeFormatado}`}
            accessibilityState={{ selected: ativa }}
            className={`px-4 py-2.5 rounded-full ${
              ativa
                ? 'bg-destaque'
                : 'bg-slate-200 dark:bg-superficie'
            }`}
          >
            <Text
              className={`text-sm ${
                ativa
                  ? 'text-slate-900 font-bold'
                  : 'text-slate-600 dark:text-suave font-semibold'
              }`}
            >
              {nomeFormatado}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};
