import 'styles/globalStyles';

import * as React from 'react';
import { render } from 'react-dom';

import { App } from 'containers/App';

const app = (
	<App />
);

render(app, document.getElementById('app'));
