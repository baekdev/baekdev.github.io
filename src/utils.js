export const getTitlePrefix = (type) => {
    return type === "til" && "[TIL] ";
}

export const isLocal = () => {
    return typeof window !== "undefined" && window.location.href.includes('localhost:8000');
}

export const isProd = () => {
    return !isLocal();
}
