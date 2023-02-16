
import React from 'react';
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import Gallery from './src/features/photos/Gallery';
import AppHeader from './src/features/components/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { makeServer } from './src/mocks/server';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  if (process.env.NODE_ENV === "development") {
    if (window.server) {
      window.server.shutdown();
    }
    window.server = makeServer();
  }
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppHeader />
          <Gallery />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

