import '../styles/style.scss'; 

import { insertContents } from "./insertContents.js";
import { insertTag } from "./insertTag.js";
import { audioContents, imageContents, videoContents } from "./util/contents.js";

insertTag('section', document.body, 'content');

insertContents(imageContents, 'img');
insertContents(audioContents, 'audio');
insertContents(videoContents, 'video');


