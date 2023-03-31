import "./index.css";

import { QueryClient } from "@tanstack/react-query";
import { useIsIndexedDBEmpty } from "./hooks/useIsIndexedDBEmpty";
import { useFillIndexedDB } from "./hooks/useFillIndexedDB";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { CircularLoader } from "./components/CircularLoader";
import { Root } from "./components/Root";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  const isEmpty = useIsIndexedDBEmpty();
  const { loading } = useFillIndexedDB();

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
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: persister }}
    >
      <Root />
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

export default App;
