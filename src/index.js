// Test import of a JavaScript module
// import { example } from '@/js/example';

import getHeader from '@/app/header/header';
import getBody from '@/app/body/body';

document.body.innerHTML = getHeader() + getBody();
