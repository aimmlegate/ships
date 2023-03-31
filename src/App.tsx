import "./index.css";
import { TreeView } from "./components/TreeView/TreeView";

import { QueryClient } from "@tanstack/react-query";
import { useIsIndexedDBEmpty } from "./hooks/useIsIndexedDBEmpty";
import { useFillIndexedDB } from "./hooks/useFillIndexedDB";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

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
    return null;
  }

  if (isEmpty && loading) {
    return <span>loading</span>;
  }
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: persister }}
    >
      <TreeView />;
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

export default App;
function persistQueryClient(arg0: {
  queryClient: QueryClient;
  persister: any;
}) {
  throw new Error("Function not implemented.");
}
