import { useState, useEffect } from 'react';

// eslint-disable-next-line valid-jsdoc
/**
 * Retrieves window dimensions.
 *
 * Copied from https://stackoverflow.com/a/36862446.
 *
 * @return {number, number} - window width and height.
 */
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

/**
 * Updates window dimensions dynamically on resize.
 *
 * Copied from https://stackoverflow.com/a/36862446.
 *
 * @return {number} height - window height.
 */
export function getWindowHeight() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);

    return windowDimensions.height;
}

/**
 * Updates current scrolled through position.
 *
 * Copied from https://stackoverflow.com/a/60708895.
 *
 * @return {number} - current scroll position.
 */
export function getScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return scrollPosition;
}
