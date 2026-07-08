import { createRoot } from 'react-dom/client';

import { assert } from '@projector/utils';

import { App } from './app';

const container = document.getElementById('app');
assert(container);

const root = createRoot(container);
root.render(<App />);
