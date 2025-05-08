<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Змейка — Главное меню</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #27ae60, #2ecc71);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    h1 {
      font-size: 48px;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }

    p {
      font-size: 20px;
      margin-bottom: 30px;
    }

    .start-btn {
      background: #ffffff;
      color: #27ae60;
      padding: 15px 30px;
      font-size: 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      transition: transform 0.2s ease;
    }

    .start-btn:hover {
      transform: scale(1.05);
      background: #ecf0f1;
    }
  </style>
</head>
<body>
  <h1>🐍 Змейка</h1>
  <p>⬆️ ⬇️ ⬅️ ➡️ — управляй змейкой и собирай еду 🍏</p>
  <button class="start-btn" onclick="location.href='snake.html'">Начать игру</button>
</body>
</html>
