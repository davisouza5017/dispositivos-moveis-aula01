import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Exercício 1 e 3: Declaração de constante de texto e exibição dinâmica
  const nome = 'Aluno';

  return (
    <View style={styles.container}>
      {/* Exercício 1: Exibição do "Hello World!" estilizado */}
      <Text style={styles.title}>Hello World!</Text>

      {/* Exercício 3: Exibição dinâmica utilizando a constante nome */}
      <Text style={styles.subtitle}>Hello, {nome}!</Text>

      {/* Exercício 2: Demonstração de organização Flexbox nativa (coluna/linha) */}
      <View style={styles.flexBoxContainer}>
        <Text style={styles.flexText}>
          React Native Flexbox Padrão: flexDirection: 'column'
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 16,
  },
  flexBoxContainer: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bfdbfe',
    alignItems: 'center',
  },
  flexText: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '500',
  },
});
