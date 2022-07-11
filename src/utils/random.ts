/**
 * Returns a random integer value given a max value.
 *
 * @param {number} max - Maximal value the random integer should be able to take.
 * @return {number} Returns random integer value.
 */
export function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}
