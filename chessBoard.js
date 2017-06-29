var getChessBoardString = function (size) {
        var chessBoardString = "";
            oddBoardRow = (function () {
                var oddBoardRow = "";
                var size2 = size;
                for (;size2 !== 0; size2--) {
                    oddBoardRow += (size2 % 2 === 0 ? "#" : " ");
                };
                return oddBoardRow;
            }()),
            evenBoardRow = (function () {
                var oddBoardRow = "";
                var size2 = size;
                for (;size2 !== 0; size2--) {
                    oddBoardRow += (size2 % 2 === 0 ? " " : "#");
                };
                return oddBoardRow;
            }()),
            currentBoardRow = 1;
        for (; currentBoardRow <= size; currentBoardRow++) {
            if (currentBoardRow % 2 === 0) {
                chessBoardString += evenBoardRow + "\n";
            } else {
                chessBoardString += oddBoardRow + "\n";
            };
        };
        chessBoardString = chessBoardString.slice(0, chessBoardString.length - 1); //remove trailing newline
        return chessBoardString;
    };

console.log(getChessBoardString(5));

