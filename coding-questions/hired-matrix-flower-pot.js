/**
 * When planting flowers in a pot, it's important to make sure that whenever you water your plant
 * any water that doesn't get absorbed by the roots drains out the bottom of the pot.
 * Otherwise, the water will pool in the bottom of the pot and cause your plant to rot.
 * You recently decided to plant some flowers of your own, and decided to fill the base of the pot with gravel.
 * You've decided to write code to verify whether water will successfully drain out of the pot.
 * Using a 2D array to represent your pot, individual pieces of gravel are notated with a 1 and
 * empty spaces between gravel are notated with a 0.
 * 
 * Example Pot #1:
 * [
 *  [0, 1, 1, 1, 1],
 *  [0, 1, 0, 0, 0],
 *  [0, 0, 0, 1, 0],
 *  [1, 1, 1, 1, 0],
 *  [1, 0, 0, 1, 0],
 * ]
 * 
 * Write a function to determine whether the water can fall from the top row to the bottom,
 * moving through the spaces between the gravel. 
 * Taking the example pot from above, you can see the possible path,
 * which is marked by replacing the relevant 0's with asterisks (*).
 * 
 * [
 *  [*, 1, 1, 1, 1],
 *  [*, 1, *, *, *],
 *  [*, *, *, 1, *],
 *  [1, 1, 1, 1, *],
 *  [1, 0, 0, 1, *],
 * ]
 * 
 * Notice that the path includes both the top and bottom rows. 
 * Allowed moves:The only moves allowed are up, down, left, and right.
 * Diagonals are not allowed.Here are a few pots that don't drain properly, along with explanations.
 * [
 *  [1, 1, 1],
 *  [1, 1, 0],
 *  [1, 0, 0],
 * ]
 * 
 * Explanation: The top row has no gaps.
 * [
 *  [1, 1, 0],
 *  [1, 1, 0],
 *  [1, 1, 1],
 * ]
 * 
 * Explanation: The bottom row has no gaps.
 * [
 *  [1, 1, 0],
 *  [1, 1, 0],
 *  [1, 0, 1],
 * ]
 * 
 * Explanation: Every row has gaps, but gaps in the middle and bottom rows are diagonal from one another,
 * and water can't flow.
 */

// hired REPL doesn't support obj?.at(y)?.at(x)
const getCellValue = (y,x,pot) => {
    if(pot && pot[y] !== undefined && pot[y][x] !== undefined) {
        return  pot[y][x];
    } else {
        return null;
    }
}

// clone
const cloneMatrix = (matrix) => {
    return matrix.map((row) => {
        return [...row];
    });
};

const checkPath = (pos, potCopy) => {
    let hasPath = pos.y === bottomRowIndex;
    if(pos.y !== bottomRowIndex) {
        // replace current cell with start
        potCopy[pos.y][pos.x] = '*';

        // check bottom
        if(getCellValue(pos.y + 1, pos.x, potCopy) === 0) {
            return checkPath({y: pos.y + 1, x: pos.x}, cloneMatrix(potCopy));
        // check right
        } else if ( getCellValue(pos.y, pos.x + 1, potCopy) === 0 ) {
            return checkPath({y: pos.y, x: pos.x + 1}, cloneMatrix(potCopy));
        // check left
        } else if ( getCellValue(pos.y, pos.x - 1, potCopy) === 0 ) {
            return checkPath({y: pos.y, x: pos.x - 1}, cloneMatrix(potCopy));
        // check top
        } else if (getCellValue(pos.y - 1, pos.x, potCopy) === 0) {
            return checkPath({y: pos.y - 1, x: pos.x}, cloneMatrix(potCopy));
        } else {
            // no more path from here
            return false;
        }
    }
    return hasPath;
}

let bottomRowIndex = -1;

/**
 * 
 * @param pot 2d matrix
 * @returns {boolean}
 */
const solution = (pot) => {
    bottomRowIndex = pot.length - 1;
    // Type your solution here 
    let hasGaps = pot.every((row) => row.some(cell => cell === 0));
    if(hasGaps) {
        hasGaps = pot[0].some((cell, i) => {
            return cell === 0 ? checkPath({y:0, x: i}, cloneMatrix(pot)) : false
        })
    }
    return hasGaps;
};

