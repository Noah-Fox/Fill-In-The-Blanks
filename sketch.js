//PUBLIC VERSION -- DO NOT EDIT
//Previously titled "Fill in the blocks game"

var levels = [[0,0,0,327576,296080,509936,115192,507776,524280,393096,435096,504752,409448,523768,434120,493944,162152,262136,257848,0,0,0],[0,0,0,327664,516216,259064,208760,470312,341992,246392,214648,523512,479192,351840,259256,414856,417720,414056,491384,0,0,0],[0,0,0,507840,523840,359280,516080,330512,380880,445304,52072,245656,409496,523104,359544,474408,460280,259336,65528,0,0,0],[0,0,0,516056,524024,98920,524192,369648,392856,388088,458632,240120,474952,425928,420600,520000,409464,523848,389624,0,0,0],[0,0,0,393208,524072,212920,468640,458488,261288,130728,469944,519552,237560,40344,499632,523576,316696,519672,53224,0,0,0],[0,0,0,520128,391872,360184,491504,496728,523736,523208,261320,521720,390536,238472,409112,518896,389048,330264,393208,0,0,0],[0,0,0,0,0,124896,107296,130976,63392,6112,6016,32672,130848,130976,91872,98272,91840,0,0,0,0,0],[0,0,0,32640,32512,16256,25600,29824,32640,13440,3968,7168,29824,15744,7936,32384,7040,32640,31104,0,0,0],[0,0,0,0,0,0,0,2093046,2097150,684030,1042238,1992690,1994610,1527762,130814,0,0,0,0,0,0,0],[0,1818336,2088696,218232,218616,2094458,228734,223742,2092278,1254596,2047174,1218,1046526,2094166,1898486,2090198,1963260,2094160,2094718,1569352,2023416,0],[0,1148650,2063354,1833958,755676,770040,1048060,697806,2009038,1683022,1964552,1904634,1047818,1018634,97038,1045440,32124,1807612,2069550,1938554,917474,0],[0,2096994,510,1048514,525250,916682,328954,1901694,1048568,2072670,1277930,2057290,517194,517310,174014,173536,2008730,1090202,2095770,1095674,2071678,0],[3405811,4194237,2528293,4166653,299815,2591742,4136831,3897793,1595673,1956109,3659703,3243519,3663347,4009983,3112931,4189663,3407635,3886483,3899038,2064359,4102911,4168956],[4194303,2097151,2097150,3145726,3145724,2621436,2621432,2359288,2359280,2228208,2228192,2162656,2162624,2129856,2129792,2113408,2113280,2105088,2104832,2100736,2099200,4192256],[4194303,3413,4194301,2100565,4194293,2624853,4194261,2755925,4194133,2788693,4193621,2797567,2795861,2801663,2795605,2818047,2795541,2883583,2795525,3145727,2795521,4194303],[4194303,2642145,3141887,3145701,2672861,2672885,2685181,3137509,2749429,2727935,4194261,2724309,3014133,3413317,3413317,3667893,3570101,4086271,1309681,3199543,3182644,4169724],[0,0,0,0,0,0,0,32640,17408,24448,21632,23680,25728,32640,16256,0,0,0,0,0,0,0],[0,0,0,0,0,0,65472,23104,32704,32448,48832,63936,65408,63616,32640,29056,0,0,0,0,0,0],[0,0,0,0,186608,184304,262032,187120,262128,236512,130928,261584,262016,130800,71312,96240,261936,253872,0,0,0,0],[0,0,770052,1048572,835660,131020,250456,1039984,779888,786416,779320,653288,1031688,696764,720764,688168,954236,1048556,1047532,788412,0,0],[0,0,0,0,0,0,0,3798975,4046847,3400331,2078603,3923659,3919871,4194299,4179835,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,2842110,4128677,1037991,4068286,2741245,4159279,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,2564023,4062207,2878126,3866347,0,0,0,0,0,0,0,0,0],[4051966,356865,4059711,2614242,3695135,4194290,2687039,2687035,2687038,3735599,983101,65575,3997731,2424894,3080225,2949183,3145726,2642434,3137535,4186755,4121599,3391230],[3996669,4194303,3030926,2029566,3864975,4177911,3718463,3931630,4066731,4190207,3645439,3669759,3537836,3510828,4168703,1572524,4054781,4180647,96943,4158123,2069240,4120543],[0,0,0,163840,163840,236704,70816,70816,72928,0,0,139264,140288,172032,173280,173216,173216,255136,0,0,0,0]];
//each individual array contains values for each level
//each value is a the walls and open spaces of each row of the level, when converted to binary


var levelOrder = [[16,7,7],[17,6,6],[22,9,0],[6,5,5],[7,3,7],[13,0,0],[18,4,4],[14,0,0],[0,3,3],[1,3,3],[8,7,1],[2,3,3],[3,3,3],[4,3,3],[20,7,0],[5,3,3],[19,2,2],[23,0,0],[9,1,1],[21,8,0],[10,1,1],[11,1,1],[12,0,0],[24,0,0],[15,0,0],[25,12,11]];
//contains [index of level from levels array, row to begin in, column to begin in]

var levelOn = 0;



//0 for wall, 1 for empty, 2 for complete
var board = [];

var newBoard = [];//used when transitioning between levels

var selected = [0,0];//row,column

var boardWidth = 22;
var boardHeight = 22;
var squareSize = 20;

var playing = true;
var canEdit = true;
var blankBoard = false;
var randomBoard = true;

var hasBeenEdited = false;

var pressingSpace = false;

var pressing = false;

var checking = 0;
var setChecking = 100;

function setup() {
  createCanvas(480, 480);
  rectMode(CENTER);
  
  
  
  if (board.length == 0){
    if (levelOn >= 0){
      board = [];
      for (var i = 0; i < levels[levelOrder[levelOn][0]].length; i ++){
        append(board,numToBinary(levels[levelOrder[levelOn][0]][i]));
      }
      
      selected = [levelOrder[levelOn][1],levelOrder[levelOn][2]];
    }else{
      for (var i = 0; i < boardHeight; i ++){
        append(board,[]);
        for (var x = 0; x < boardWidth; x ++){
          append(board[i],1);
        }
      }
    }
  }
  
  
  
  if (blankBoard){
    for (var i = 0; i < board.length; i ++){
      for (var x = 0; x < board[i].length; x ++){
        board[i][x] = 1;
        if (randomBoard){
          board[i][x] = random([0,1,1,1]);
        }
      }
    }
  }
}

function draw() {
  background(220);
  
  printBoard(240,240,board,squareSize);
  
  
  
  fill(0);
  textSize(16);
  if (levelOn < levelOrder.length-1){
    text("Level " + (levelOn+1),2,13);
  }
  
  
  if (playing){
    if (checking == 0){
      var isFinished = true;
      for (var i = 0; i < board.length; i ++){
        for (var x = 0; x < board[i].length; x ++){
          if (board[i][x] == 1){
            isFinished = false;
          }
        }
      }
      if (isFinished){
        newBoard = [];
        for (var i = 0; i < levels[levelOrder[levelOn][0]].length; i ++){
          append(newBoard,numToBinary(levels[levelOrder[levelOn+1][0]][i]));
        }
        checking = setChecking;
      }
    }
    
    var moveDist = 0;
    var moveDirection = [0,0];
    
    if (keyIsDown(RIGHT_ARROW)){
      if (!pressing){
        moveDist = canMoveDist(board,selected,[0,1]);
        moveDirection = [0,1];
        
      }
    }else if (keyIsDown(LEFT_ARROW)){
      if (!pressing){
        moveDist = canMoveDist(board,selected,[0,-1]);
        moveDirection = [0,-1];
        
      }
    }else if (keyIsDown(UP_ARROW)){
      if (!pressing){
        moveDist = canMoveDist(board,selected,[-1,0]);
        moveDirection = [-1,0];
        
      }
    }else if (keyIsDown(DOWN_ARROW)){
      if (!pressing){
        moveDist = canMoveDist(board,selected,[1,0]);
        moveDirection = [1,0];
        
      }
    }else if (pressing){
      pressing = false;
    }
    
    if (moveDist != 0){
      for (var i = 1; i <= abs(moveDist); i ++){
        board[selected[0]+moveDirection[0]*i][selected[1]+moveDirection[1]*i] = 2;
      }
      selected[0] += moveDirection[0]*moveDist;
      selected[1] += moveDirection[1]*moveDist;
    }
    
    if (board[selected[0]][selected[1]] == 1){
      board[selected[0]][selected[1]] = 2;
    }
    
  }
}

function printBoard(xCenter,yCenter,grid,size){
  strokeWeight(2);
  
  var checkLine = 0;
  if (checking < 0){
    checkLine = 240-0.5*board.length*size+abs(checking)*board.length*size/setChecking;
  }
  
  for (var i = 0; i < grid.length; i ++){
    for (var x = 0; x < grid[i].length; x ++){
      
      var xPos = 240-(grid[i].length-1)*(size)/2+x*(size);
      var yPos = 240-(grid.length-1)*(size)/2+i*(size);
      
      var gridBox = grid[i][x];
      var levelUse = levelOn;
      var useSelected = [selected[0],selected[1]];
      if (checking < 0 && checkLine+0.5*size < yPos){
        gridBox = newBoard[i][x];
        levelUse ++;
        useSelected = [levelOrder[levelOn+1][1],levelOrder[levelOn+1][2]];
      }
      
      if (gridBox <= 0){
        if (gridBox < 0 && keyIsDown(CONTROL)){
          fill(145,0,255);
        }else if (abs(i-10.5) > 10.5-levelOrder[levelUse][1] || abs(x-10.5) > 10.5-levelOrder[levelUse][2]){
          fill(0,0,100);
        }else{
          fill(0,0,255);
        }
      }else if (gridBox == 1){
        fill(0,255,0);
      }else{
        fill(0,150,0);
      }
      
      
      square(xPos,yPos,size);
      
      if (playing && i == useSelected[0] && x == useSelected[1]){
        fill(0);
        circle(240-(grid[i].length-1)*(size)/2+x*(size),240-(grid.length-1)*(size)/2+i*(size),0.5*size);
      }
    }
  }
  
  if (checking > 0){
    var startPos = 0.5*board.length*size;
    line(240-startPos,240+startPos-checking*board.length*size/setChecking,240+startPos,240+startPos-checking*board.length*size/setChecking);
    checking --;
    if (checking == 0){
      checking = -setChecking;
    }
  }else if (checking < 0){
    var startPos = 0.5*board.length*size;
    line(240-startPos,240-startPos+abs(checking)*board.length*size/setChecking,240+startPos,240-startPos+abs(checking)*board.length*size/setChecking);
    checking ++;
    if (checking == 0){
      board = newBoard;
      levelOn ++;
      selected = [levelOrder[levelOn][1],levelOrder[levelOn][2]];
    }
  }
  
}

function canMove(grid,gridPos,movement){
  if (gridPos[0]+movement[0] < grid.length && gridPos[0]+movement[0] >= 0 && gridPos[1]+movement[1] < grid[gridPos[0]].length && gridPos[1]+movement[1] >= 0){
    if (grid[gridPos[0]+movement[0]][gridPos[1]+movement[1]] > 0){
      return true;
    }else if (canEdit){
      grid[gridPos[0]+movement[0]][gridPos[1]+movement[1]] = -1;
    }
  }
  return false;
}

function canMoveDist(grid,gridPos,movement){
  var stillMoving = true;
  var hasMoved = 0;
  while (stillMoving){
    hasMoved ++;
    stillMoving = canMove(grid,gridPos,[movement[0]*hasMoved,movement[1]*hasMoved]);
    if (hasMoved > grid.length+grid[0].length){
      console.log("It messed up: " + hasMoved);
      return -1;
    }
  }
  return hasMoved-1;
}

//inputs integer value
//outputs array of binary value - [0,1,1,0,1,0]
function numToBinary(num){
  var topPow = 21;
  var answer = [];
  var stop = false;
  /*while (pow(2,topPow) < num && !stop){
    topPow ++;
    if (topPow > 10){
      stop = true;
      console.log("stopped");
    }
  }
  topPow --;*/
  for (var bi = topPow; bi >= 0; bi --){
    if (num >= pow(2,bi)){
      num -= pow(2,bi);
      append(answer,1);
    }else{
      append(answer,0);
    }
  }
  return answer;
}

//inputs array of binary value - [0,1,1,0,1,0]
//outputs integer value
function binaryToNum(biArray){
  var answer = 0;
  for (var bi = 0; bi < biArray.length; bi ++){
    var val = biArray[bi];
    if (val == 2){
      val = 1;
    }
    answer += pow(2,biArray.length-bi-1)*val;
  }
  return answer;
}


