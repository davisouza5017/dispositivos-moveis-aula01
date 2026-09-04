import React from 'react';
import { Text, View } from 'react-native';

interface CabecalhoProps {
  titulo: string;
  favoritos: number;
}

export const Cabecalho: React.FC<CabecalhoProps> = ({ titulo, favoritos }) => {
  return (
    <View className="flex-row justify-between items-center mb-4" accessibilityRole="header">
      <Text className="text-destaque text-2xl font-bold flex-1" numberOfLines={1}>
        {titulo}
      </Text>

      <View
        className="flex-row items-center bg-slate-200 dark:bg-superficie px-3 py-1.5 rounded-full gap-1"
        accessible={true}
        accessibilityLabel={`${favoritos} produtos favoritados`}
      >
        <Text className="text-alerta text-sm">★</Text>
        <Text className="text-slate-800 dark:text-white font-bold text-sm">{favoritos}</Text>
      </View>
    </View>
  );
};
