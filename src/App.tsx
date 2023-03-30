import "./index.css";
import { TreeView } from "./components/TreeView/TreeView";

import { useFillIndexedDB } from "./hooks/useFillIndexedDB";
import { useIsIndexedDBEmpty } from "./hooks/useIsIndexedDBEmpty";

function App() {
  const isEmpty = useIsIndexedDBEmpty();
  const { loading } = useFillIndexedDB();

  if (isEmpty === undefined) {
    return null;
  }

  if (isEmpty && loading) {
    return <span>loading</span>;
  }

  return <TreeView />;
}

export default App;
