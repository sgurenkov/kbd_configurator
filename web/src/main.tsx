import { render } from "solid-js/web";
import { KeyboardComponent } from "./app/Keyboard";
import { KeyboardConfigurator } from "./shared/model";
import "./style.css";

const App = () => {
  const keyboard = new KeyboardConfigurator(34);
  return (
    <div class="p-3">
      <KeyboardComponent keyboard={keyboard} />
    </div>
  );
};

render(() => <App />, document.getElementById("app") as HTMLElement);
