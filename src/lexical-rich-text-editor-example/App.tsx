import { Link } from "react-router-dom";
import Editor from "./Editor";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <h1>Rich Text Example</h1>
      <p>Note: this is an experimental build of Lexical</p>
      <Editor />

      <div className="other">
        <h2>Other Examples</h2>
        <ul>
          <li>
            <Link to="basic">
              Plain text example
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
