export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    if (typeof(isIndex) !== 'boolean') {
        return ''
    } else if (isIndex) {
        return 'ALX';
    } else {
        return 'ALX main dashboard';
    }
}