import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { CircularLoader } from './components/CircularLoader';
import { Root } from './components/Root';
import { useFillVehiclesDb } from './hooks/indexedDb/useFillVehiclesDb';
import { useIsVehiclesDbEmpty } from './hooks/indexedDb/useIsVehiclesDbEmpty';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
      staleTime: Infinity, // Set stale time to 0
      refetchOnWindowFocus: false, // Disable refetch on window focus
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  const isEmpty = useIsVehiclesDbEmpty();
  const { loading } = useFillVehiclesDb();

  if (isEmpty === undefined) {
    return (
      <div className="h-[100vh]">
        <CircularLoader />
      </div>
    );
  }

  if (isEmpty && loading) {
    return (
      <div className="h-[100vh]">
        <CircularLoader />
      </div>
    );
  }
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister: persister }}>
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

export default App;
