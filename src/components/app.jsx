import React from 'react';
import { Provider } from 'react-redux';

import Game from 'components/game.jsx';
import store from 'store';

export default <Provider store={ store }><Game /></Provider>
