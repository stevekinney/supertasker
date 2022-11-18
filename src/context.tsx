import { createContext } from 'react';

import data from './api/data.json';

const ApplicationContext = createContext(data);

export default ApplicationContext;
