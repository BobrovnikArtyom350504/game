// import MainLoop from 'mainloop.js';
import { render } from 'react-dom';

import App from 'components/app.jsx';

// MainLoop.setUpdate(delta => {})
//         .setDraw(() => render(App, document.getElementById('root')))
//         .start();

render(App, document.getElementById('root'));
