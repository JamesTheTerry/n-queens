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

//////////////////////////////////////////////////////////////////////////////////
// These two helper functions are part of V2

window.semiProNoConflictsRooks = function(array) {
  // this could be better, sets are expensive
  
  // turn array into set (set doesn't store duplicates)
  // returns true if no conflicts
  // returns false if conflicts
  var set = new Set(array);
  if (set.size === array.length) {
    return true;
  } else {
    return false;
  }
};

window.smartNoConflictsQueens = function(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    if (obj[i] === undefined) {
      obj[i] = obj[i];
    } else if (obj[i]) {
      return false;
    }
  }
  return true;
};

window.flatBoardToMatrix = function(array) {
  var matrixBoard = new Board({n: array.length});
  matrixBoard = matrixBoard.rows();
  
  for (var i = 0; i < array.length; i++) {
    matrixBoard[i][array[i]] = 1;
  }
  
  return matrixBoard;
};

// End Helper functions
//////////////////////////////////////////////////////////////////////////////////


window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  
  //////////////////////////////////////////////////////////////////////////////////
  // V1
  // Not an efficent implementation
  
  // var board = new Board({n: n});
  // var recursive = function(board, row, pieceCount) {
  //   var chessboard = new Board(board.rows());
  //   if (pieceCount >= n) {
  //     if (!chessboard.hasAnyRooksConflicts()) {
  //       solution = chessboard;
  //       return true;
  //     }
  //     return;
  //   } else {
  //     for (var i = 0; i < n; i++) {
  //       chessboard.togglePiece(row, i);
  //       row++;
  //       var validSol = recursive(chessboard, row, pieceCount + 1);
  //       if (validSol) {
  //         return true;
  //       }
  //       row--;
  //       chessboard.togglePiece(row, i);
  //     }
  //   }
  //   return;
  // };
  
  // recursive(board, 0, 0);
  
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution.rows();
  
  // END V1
  //////////////////////////////////////////////////////////////////////////////////
  
  // V2
  // literally like rock paper scissors
  
  var flatBoard = function(piecesLeftToPlace, board) {
    if (piecesLeftToPlace === 0) {
      // check to see if it passes
      if (semiProNoConflictsRooks(board) === true) {
        // set solution to board (will need to calculate it)
        // return true
        solution = flatBoardToMatrix(board);
        return true;
      } else {
        return false;
      }
    } else {
      for (var i = 0; i < n; i++) {
        var placement = i;
        var workingSolution = flatBoard(piecesLeftToPlace - 1, board.concat(placement));
        
        if (workingSolution === true) {
          return true;
        }
      }
    }
  };
  
  flatBoard(n, []);
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  
  // END V2
  //////////////////////////////////////////////////////////////////////////////////
  
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  
  
  
  //////////////////////////////////////////////////////////////////////////////////
  // V1
  // Not an efficent implementation
  // var board = new Board({n: n});

  
  // var recursive = function(board, row, pieceCount) {
  //   var chessboard = new Board(board.rows());
  //   if (pieceCount >= n) {
  //     if (!chessboard.hasAnyRooksConflicts()) {
  //       solutionCount += 1;
  //     }
  //     return;
  //   } else {
  //     for (var i = 0; i < n; i++) {
  //       chessboard.togglePiece(row, i);
  //       row++;
  //       recursive(chessboard, row, pieceCount + 1);
  //       row--;
  //       chessboard.togglePiece(row, i);
  //     }
  //   }
  //   return;
  // };
  
  // recursive(board, 0, 0);

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // END V1
  //////////////////////////////////////////////////////////////////////////////////
  
  // V2
  // literally like rock paper scissors
  
  var flatBoard = function(piecesLeftToPlace, board) {
    if (piecesLeftToPlace === 0) {
      // check to see if it passes
      if (semiProNoConflictsRooks(board) === true) {
        solutionCount += 1;
      }
      return;
    } else {
      for (var i = 0; i < n; i++) {
        var placement = i;
        flatBoard(piecesLeftToPlace - 1, board.concat(placement));
      }
    }
  };
  
  flatBoard(n, []);
  
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  
  // END V2
  //////////////////////////////////////////////////////////////////////////////////
  
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});


  //////////////////////////////////////////////////////////////////////////////////
  // START V1
  // var board = new Board({n: n});

  
  // var recursive = function(board, row, pieceCount) {
  //   var chessboard = new Board(board.rows());
  //   if (pieceCount >= n) {
  //     if (!chessboard.hasAnyQueensConflicts()) {
  //       solution = chessboard;
  //       return true;
  //     }
  //     return;
  //   } else {
  //     for (var i = 0; i < n; i++) {
  //       chessboard.togglePiece(row, i);
  //       row++;
  //       var validSol = recursive(chessboard, row, pieceCount + 1);
  //       if (validSol) {
  //         return true;
  //       }
  //       row--;
  //       chessboard.togglePiece(row, i);
  //     }
  //   }
  //   return;
  // };
  
  // recursive(board, 0, 0);
  
  // END V1
  //////////////////////////////////////////////////////////////////////////////////
  
  // V2
  // literally like rock paper scissors
  
  var flatBoard = function(piecesLeftToPlace, board) {
    if (piecesLeftToPlace === 0) {
      // check to see if it passes
      if (semiProNoConflictsQueens(board) === true) {
        // set solution to board (will need to calculate it)
        // return true
        solution = flatBoardToMatrix(board);
        return true;
      } else {
        return false;
      }
    } else {
      for (var i = 0; i < n; i++) {
        var placement = i;
        var workingSolution = flatBoard(piecesLeftToPlace - 1, board.concat(placement));
        
        if (workingSolution === true) {
          return true;
        }
      }
    }
  };
  
  flatBoard(n, []);
  
  
  // END V2
  //////////////////////////////////////////////////////////////////////////////////
  
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
