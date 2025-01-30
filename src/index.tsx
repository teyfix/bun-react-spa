import { createRoot } from "react-dom/client";
import { App } from "./app";

const div = document.createElement("div");
const root = createRoot(div);

root.render(<App />);
document.body.appendChild(div);
