export {};

/**
 * Add types for technology and project globally in order to use them everywhere.
 */
declare global {
    type technology = {
        name: string;
        share: number;
    }
    // eslint-disable-next-line no-unused-vars
    type project = {
        title: string,
        description: string,
        stack: technology[],
        githubLink?: string,
        liveLink?: string,
        pitchLink?: string,
        projectVideoLink?: string
    }
}
