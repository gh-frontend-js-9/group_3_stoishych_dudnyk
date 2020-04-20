export const loadState = () => {
    const serializedState = localStorage.getItem('currentPost');
    if (serializedState === null) {
        return undefined;
    }
    return serializedState;
};
