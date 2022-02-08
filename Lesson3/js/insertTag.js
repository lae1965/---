export const insertTag = (tagName, parent, className) => { 
    const tag = document.createElement(tagName);
    tag.className = className;
    parent.append(tag);
    return tag;
}