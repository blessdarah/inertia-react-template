export const useUtils = () => {
    const isEmpty = (obj) => obj !== undefined && Object.keys(obj).length > 0;

    return {
        isEmpty
    }
}
