import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider} from 'baseui';
import { AdicionarCategoria } from './Pages/AdicionarCategoria';


const engine = new Styletron();

export default function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <AdicionarCategoria/>
      </BaseProvider>
    </StyletronProvider>
  );
}
