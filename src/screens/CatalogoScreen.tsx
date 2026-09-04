import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Cabecalho } from '@/components/Cabecalho';
import { CardProduto } from '@/components/CardProduto';
import { FiltroCategorias } from '@/components/FiltroCategorias';
import { PRODUTOS } from '@/constants/produtos';
import { Produto } from '@/types/produto';

export const CatalogoScreen: React.FC = () => {
  const [categoria, setCategoria] = useState<string>('todas');
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const categorias = useMemo(() => {
    const listaUnica = Array.from(new Set(PRODUTOS.map((p) => p.category)));
    return ['todas', ...listaUnica];
  }, []);

  useEffect(() => {
    console.log('categoria selecionada', categoria);
  }, [categoria]);

  const alternarFavorito = (id: number) => {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((favId) => favId !== id)
        : [...atuais, id]
    );
  };

  const produtosFiltrados = useMemo(() => {
    if (categoria === 'todas') {
      return PRODUTOS;
    }
    return PRODUTOS.filter((p) => p.category === categoria);
  }, [categoria]);

  const renderItem = ({ item }: { item: Produto }) => (
    <CardProduto
      produto={item}
      favorito={favoritos.includes(item.id)}
      aoAlternarFavorito={alternarFavorito}
    />
  );

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-fundo">
      <View className="flex-1 p-4 pt-10">
        <Cabecalho titulo="Vitrine de Produtos" favoritos={favoritos.length} />

        <FiltroCategorias
          categorias={categorias}
          selecionada={categoria}
          aoSelecionar={setCategoria}
        />

        <FlatList
          data={produtosFiltrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerClassName="pb-6 flex-grow"
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View className="flex-1 items-center justify-center py-12 gap-2">
              <Text className="text-4xl">🔍</Text>
              <Text className="text-base text-slate-500 dark:text-suave text-center">
                Nenhum produto nesta categoria
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};
