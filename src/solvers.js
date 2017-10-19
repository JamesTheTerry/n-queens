/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  
  var board = new Board({n: n});

  
  var recursive = function(board, row, pieceCount) {
    // debugger;
    var chessboard = new Board(board.rows());
    if (pieceCount >= n) {
      // console.log('is there a conflict: ', chessboard.hasAnyRooksConflicts());
      if (!chessboard.hasAnyRooksConflicts()) {
        // console.log('somehow got here');
        // console.log(chessboard.rows()[0] + '\n' + chessboard.rows()[1] + '\n' + chessboard.rows()[2] + '\n' + chessboard.rows()[3]);
        solution = chessboard;
        return true;
      }
      return;
    } else {
      for (var i = 0; i < n; i++) {
        // console.log('row: ', row);
        chessboard.togglePiece(row, i);
        
        // console.log(chessboard.rows()[0] + '\n' + chessboard.rows()[1] + '\n' + chessboard.rows()[2] + '\n' + chessboard.rows()[3]);
        
        
        // console.log('x')
        row++;
        var validSol = recursive(chessboard, row, pieceCount + 1);
        if (validSol) {
          return true;
        }
        row--;
        chessboard.togglePiece(row, i);
      }
    }
    return;
  };
  
  recursive(board, 0, 0);
  
  
  
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
