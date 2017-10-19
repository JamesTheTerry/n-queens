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
    var chessboard = new Board(board.rows());
    if (pieceCount >= n) {
      if (!chessboard.hasAnyRooksConflicts()) {
        solution = chessboard;
        return true;
      }
      return;
    } else {
      for (var i = 0; i < n; i++) {
        chessboard.togglePiece(row, i);
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
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  
  var board = new Board({n: n});

  
  var recursive = function(board, row, pieceCount) {
    var chessboard = new Board(board.rows());
    if (pieceCount >= n) {
      if (!chessboard.hasAnyRooksConflicts()) {
        solutionCount += 1;
      }
      return;
    } else {
      for (var i = 0; i < n; i++) {
        chessboard.togglePiece(row, i);
        row++;
        recursive(chessboard, row, pieceCount + 1);
        row--;
        chessboard.togglePiece(row, i);
      }
    }
    return;
  };
  
  recursive(board, 0, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});

  var board = new Board({n: n});

  
  var recursive = function(board, row, pieceCount) {
    var chessboard = new Board(board.rows());
    if (pieceCount >= n) {
      if (!chessboard.hasAnyQueensConflicts()) {
        solution = chessboard;
        return true;
      }
      return;
    } else {
      for (var i = 0; i < n; i++) {
        chessboard.togglePiece(row, i);
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
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;  
  var board = new Board({n: n});

  var recursive = function(board, row, pieceCount) {
    var chessboard = new Board(board.rows());
    if (pieceCount >= n) {
      if (!chessboard.hasAnyQueensConflicts()) {
        solutionCount += 1;
      }
      return;
    } else {
      for (var i = 0; i < n; i++) {
        chessboard.togglePiece(row, i);
        row++;
        recursive(chessboard, row, pieceCount + 1);
        row--;
        chessboard.togglePiece(row, i);
      }
    }
    return;
  };
  
  recursive(board, 0, 0);
  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
