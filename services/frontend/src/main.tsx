import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './1_app/App';

import '@/1_app/styles/index.scss';

const reactRoot = createRoot(
    document.getElementById('root')!,
  );
  
reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)