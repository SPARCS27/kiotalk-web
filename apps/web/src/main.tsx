import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';

import 'regenerator-runtime/runtime';

createRoot(document.getElementById('root')!).render(<App />);
