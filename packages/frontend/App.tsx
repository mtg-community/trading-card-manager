import { initializeDomainLayer } from "./src/domain";
import { initializeDataLayer } from "./src/data";
import { initializePresentationLayer } from "./src/presentation";

const { ErrorBoundary } = initializeDataLayer();
const store = initializeDomainLayer();
const App = initializePresentationLayer(store, ErrorBoundary);

export default App;
