import { EDSProvider } from '@equinor/mad-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from './hooks/useColorScheme';
import { Navigation } from './navigation';
import { getEDSDensity } from './utils/getEDSDensity';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <EDSProvider colorScheme={colorScheme} density={getEDSDensity()}>
        <Navigation colorScheme={colorScheme} />
      </EDSProvider>
    </SafeAreaProvider>
  );
}