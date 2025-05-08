<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Лабиринт со смайликом</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f8f9fa;
      color: #333;
      text-align: center;
      margin: 0;
      padding: 20px;
    }

    h1 {
      font-size: 36px;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    p {
      color: #555;
      font-size: 18px;
      margin: 10px 0;
    }

    #emoji-selection {
      margin: 30px 0;
    }

    .emoji-button {
      font-size: 32px;
      margin: 10px;
      padding: 12px 20px;
      background: #ffffff;
      border: 2px solid #ced4da;
      border-radius: 12px;
      cursor: pointer;
      transition: 0.2s ease;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    }

    .emoji-button:hover {
      background: #e2f0ff;
      border-color: #74b9ff;
      transform: scale(1.05);
    }

    #maze {
      display: grid;
      grid-template-columns: repeat(10, 48px);
      grid-template-rows: repeat(10, 48px);
      gap: 5px;
      justify-content: center;
      margin: 20px auto;
    }

    .cell {
      width: 48px;
      height: 48px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: inset 0 0 3px rgba(0,0,0,0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: background 0.2s ease;
    }

    .wall {
      background-color: #dfe6e9;
    }

    .player {
      background-color: #a3e4d7;
    }

    .exit {
      background-color: #ffeaa7;
    }

    #message {
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #27ae60;
    }
  </style>
</head>
<body>
  <h1>🌀 Лабиринт</h1>

  <!-- Выбор смайлика -->
  <div id="emoji-selection">
    <p>Выбери своего персонажа:</p>
    <button class="emoji-button">😊</button>
    <button class="emoji-button">🐱</button>
    <button class="emoji-button">🐸</button>
    <button class="emoji-button">🤖</button>
  </div>
<!-- Игра -->
<div id="game" style="display: none;">
    <p>Используй стрелочки, чтобы дойти до выхода 🚪</p>
    <div id="maze"></div>
    <p id="message"></p>
  </div>

  <script>
    const mazeElement = document.getElementById("maze");
    const message = document.getElementById("message");
    const gameSection = document.getElementById("game");
    const emojiButtons = document.querySelectorAll(".emoji-button");
    const emojiSelection = document.getElementById("emoji-selection");

    let selectedEmoji = "😊";

    const maze = [
      [0,0,0,1,0,0,0,0,0,0],
      [1,1,0,1,0,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,1,0],
      [0,1,1,1,1,1,1,0,1,0],
      [0,1,0,0,0,0,1,0,1,0],
      [0,1,0,1,1,0,1,0,0,1],
      [0,1,0,1,0,0,1,0,0,1],
      [0,0,0,1,0,1,1,0,0,0],
      [1,1,0,0,0,0,0,1,0,1],
      [0,0,0,1,1,1,0,1,0,0]
    ];

    const exitPos = { x: 9, y: 9 };
    let playerPos = { x: 0, y: 0 };

    function drawMaze() {
      mazeElement.innerHTML = "";
      for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");

          if (maze[y][x] === 1) cell.classList.add("wall");
          if (x === exitPos.x && y === exitPos.y) {
            cell.classList.add("exit");
            cell.textContent = "🚪";
          }
          if (x === playerPos.x && y === playerPos.y) {
            cell.classList.add("player");
            cell.textContent = selectedEmoji;
          }

          mazeElement.appendChild(cell);
        }
      }
    }

    function movePlayer(dx, dy) {
      const newX = playerPos.x + dx;
      const newY = playerPos.y + dy;
      if (
        newX >= 0 && newX < 10 &&
        newY >= 0 && newY < 10 &&
        maze[newY][newX] === 0
      ) {
        playerPos = { x: newX, y: newY };
        drawMaze();
        checkWin();
      }
    }

    function checkWin() {
      if (playerPos.x === exitPos.x && playerPos.y === exitPos.y) {
        message.textContent = "🎉 Победа! Ты прошёл лабиринт!";
        gameSection.style.display = "none";
        document.removeEventListener("keydown", handleKey); // Убираем обработчик событий
      }
    }

    function handleKey(e) {
      switch (e.key) {
        case "ArrowUp": movePlayer(0, -1); break;
        case "ArrowDown": movePlayer(0, 1); break;
        case "ArrowLeft": movePlayer(-1, 0); break;
        case "ArrowRight": movePlayer(1, 0); break;
      }
    }

    // Выбор смайлика
    emojiButtons.forEach(button => {
      button.addEventListener("click", () => {
        selectedEmoji = button.textContent;
        emojiSelection.style.display = "none";
        gameSection.style.display = "block";
        drawMaze();
        document.addEventListener("keydown", handleKey);
      });
    });
  </script>
</body>
</html>
      <span style="font-size: 36px; color: #2ecc71;">🎉</span>
      <span style="font-size: 24px; font-weight: bold; color: #27ae60;">Поздравляем, ты победил! 🚪</span>
      <br>
      <span style="font-size: 18px; color: #555;">Ты прошел лабиринт и достиг цели! 🎯</span>
