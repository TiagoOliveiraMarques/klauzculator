import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Calculator } from 'src/components/calculator';
import 'src/theme/theme.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Calculator />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
