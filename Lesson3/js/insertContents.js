import { insertTag } from "./insertTag.js"; 

export const insertContents = (contents, tagName) => {
    const section = document.body.querySelector('.content');
    contents.forEach(element => {
        const figure = insertTag('figure', section, 'content__item');

        const div = insertTag('div', figure, 'content__item_justify');
        
        const tag = insertTag(tagName, div, (tagName === 'audio') ? 'content__audio' : 'content__image');
        tag.src = element.src;
        if (tagName === 'img') tag.alt = element.src;
        else tag.setAttribute('controls', '');

        const figcaption = insertTag('figcaption', figure, 'content__text');
        figcaption.innerText = element.title;
    });

}