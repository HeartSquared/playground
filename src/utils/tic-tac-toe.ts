// NOTES:
// - Types are currently fixed to a 3x3
//   - Runtime will allow for catering different sizes
// - Assumption: Diagonals are only valid if the grid is square
// - Not all edge cases have been catered for

type Value = "x" | "o" | undefined
type Row = [Value?, Value?, Value?]
type Grid = [Row, Row, Row]

// grid[0][0]  grid[0][1]  grid[0][2]
// grid[1][0]  grid[1][1]  grid[1][2]
// grid[2][0]  grid[2][1]  grid[2][2]

export const checkHasWinner = (grid: Grid): Value => {
    let winner: Value

    const lastRowIndex = grid.length - 1
    let rowIndex = 0

    while (!winner && rowIndex <= lastRowIndex) {
        const row = grid[rowIndex]

        // row
        const firstRowValue = row[0]
        const lastRowIndex = row.length - 1
        let currentIndex = 1

        while(!winner && currentIndex <= lastRowIndex) {
            if (!firstRowValue) break

            if (!row[currentIndex] || row[currentIndex] !== firstRowValue) {
                break
            }

            if (currentIndex >= lastRowIndex) {
                winner = firstRowValue
                break
            } else {
                currentIndex++
            }
        }

        // column
        const colIndex = rowIndex
        let currentRowIndex = 1
        const firstColValue = grid[0][colIndex]

        while (!winner && currentRowIndex <= lastRowIndex) {
            if (!firstColValue || grid[currentRowIndex][colIndex] !== firstColValue) {
                break
            }

            if (currentRowIndex >= lastRowIndex) {
                winner = firstColValue
                break
            } else {
                currentRowIndex++
            }
        }

        // diagonal
        // only valid if square
        if (lastRowIndex !== lastRowIndex) continue

        const topLeftValue = grid[0][0]
        const lastIndex = lastRowIndex // same as lastRowIndex
        let dDownIndex = 1

        while (!winner && dDownIndex <= lastIndex) {
            if (!topLeftValue) break

            const value = grid[dDownIndex][dDownIndex]
            if (value !== topLeftValue) {
                break
            }

            if (dDownIndex >= lastIndex) {
                winner = topLeftValue
                break
            } else {
                dDownIndex++
            }
        }

        const bottomLeftValue = grid[grid.length - 1][0]
        let dUpRowIndex = grid.length - 1
        let dUpColIndex = 0

        while (!winner && dUpRowIndex >= 0) {
            const value = grid[dUpRowIndex][dUpColIndex]
            if (!bottomLeftValue || value !== bottomLeftValue) {
                break
            }

            if (dUpRowIndex <= 0) {
                winner = bottomLeftValue
                break
            } else {
                dUpRowIndex--
                dUpColIndex++
            }
        }

        rowIndex++
    }

    return winner
}
