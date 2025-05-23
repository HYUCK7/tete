export function debounce (func) {
    let nextFrameCallback = -1;
    return () => {
        cancelAnimationFrame(nextFrameCallback);
        nextFrameCallback = requestAnimationFrame(func);
    }
    
}