import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Produto } from '@/types/produto';

interface CardProdutoProps {
  produto: Produto;
  favorito: boolean;
  aoAlternarFavorito: (id: number) => void;
}

export const CardProduto: React.FC<CardProdutoProps> = ({
  produto,
  favorito,
  aoAlternarFavorito,
}) => {
  const marca = produto.brand ?? 'Sem marca';
  const precoFormatado = produto.price.toFixed(2);

  return (
    <View className="flex-row items-center gap-3 bg-slate-100 dark:bg-superficie rounded-card p-3 mb-3">
      <Image
        source={{ uri: produto.thumbnail }}
        className="w-16 h-16 rounded-lg bg-fundo"
        resizeMode="cover"
        accessibilityLabel={`Foto do produto ${produto.title}`}
      />

      <View className="flex-1 justify-center">
        <Text className="text-slate-500 dark:text-suave text-xs mt-0.5" numberOfLines={1}>
          {marca}
        </Text>
        <Text className="text-slate-900 dark:text-white text-[15px] font-semibold" numberOfLines={2}>
          {produto.title}
        </Text>
        <Text className="text-destaque text-[17px] mt-1.5 font-bold">
          R$ {precoFormatado}
        </Text>
      </View>

      <Pressable
        onPress={() => aoAlternarFavorito(produto.id)}
        className="min-w-[44px] min-h-[44px] items-center justify-center active:opacity-60"
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={
          favorito
            ? `Remover ${produto.title} dos favoritos`
            : `Adicionar ${produto.title} aos favoritos`
        }
        accessibilityState={{ selected: favorito }}
      >
        <Text
          className={`text-2xl ${
            favorito ? 'text-alerta' : 'text-slate-400 dark:text-slate-500'
          }`}
        >
          ★
        </Text>
      </Pressable>
    </View>
  );
};
