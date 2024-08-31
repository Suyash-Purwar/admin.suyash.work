import { Studio } from "sanity";

import sanityConfig from "./sanity/config";

function App() {
  return <Studio config={sanityConfig} />;
}

export default App;
