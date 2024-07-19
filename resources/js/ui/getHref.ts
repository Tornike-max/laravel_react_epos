export const getHref = () => {
    const href = window.location.href;
    const pageHrefName = href.slice(href.lastIndexOf("?") + 1, -1);

    return pageHrefName;
};
