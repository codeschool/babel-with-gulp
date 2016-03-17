import FlashMessage from "./flash-message";
// import './routes'
import why from './directive';
why();

let flash = new FlashMessage("Hello from ES2015, Babel and Gulp!");
flash.display();
