const generateImagePath = (image: string) => {
    if (image.includes("https" || "http")) {
        return image;
    }

    if (image.includes("images/")) {
        return `/storage/${image}`;
    }
};

export default generateImagePath;
