import { EDSProvider } from '@equinor/mad-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from './hooks/useColorScheme';
import { Navigation } from './navigation';
import { getEDSDensity } from './utils/getEDSDensity';
import { TestPlanProvider } from './contexts/TestPlanContext';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <TestPlanProvider>
      <EDSProvider colorScheme={colorScheme} density={getEDSDensity()}>
        <Navigation colorScheme={colorScheme} />
      </EDSProvider>
      </TestPlanProvider>
    </SafeAreaProvider>
  );
}