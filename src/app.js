import FlashMessage from "./flash-message";
import angular from 'angular';
// import './routes'


import directive from './directive';
directive();

let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
flash.display();
