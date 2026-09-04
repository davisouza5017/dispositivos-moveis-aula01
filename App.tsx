import './global.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CatalogoScreen } from '@/screens/CatalogoScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CatalogoScreen />
    </>
  );
}
