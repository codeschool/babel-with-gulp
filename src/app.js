import Post from './post';
import ui from './ui'

Post.findAll().then(ui.renderPosts).catch((error) => console.log(error));
