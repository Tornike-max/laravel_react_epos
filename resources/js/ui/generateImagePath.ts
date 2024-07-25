const generateImagePath = (image: string | null): string | null => {
    if (!image) {
        return null;
    }

    if (image.startsWith("https://") || image.startsWith("http://")) {
        return image;
    }

    if (image.includes("images/")) {
        return `/storage/${image}`;
    }

    return null;
};

export default generateImagePath;
