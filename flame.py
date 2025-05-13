<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Анимация Пламени</title>
  <style>
    body {
      background-color: #1e1e1e;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .flame {
      width: 50px;
      height: 100px;
      background: linear-gradient(180deg, #ff7f00, #ff4500, #d7301f);
      border-radius: 50%;
      position: relative;
      animation: flicker 1s infinite ease-in-out, flameMovement 1.5s infinite ease-in-out;
    }

    .flame::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      width: 20px;
      height: 40px;
      background: linear-gradient(180deg, #ff7f00, #ff4500, #d7301f);
      border-radius: 50%;
      transform: translateX(-50%);
      animation: flicker 1s infinite ease-in-out, flameMovement 1.5s infinite ease-in-out;
    }

    @keyframes flicker {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.6;
      }
    }

    @keyframes flameMovement {
      0% {
        transform: scaleX(1) scaleY(1) translateY(0);
      }
      25% {
        transform: scaleX(1.1) scaleY(0.9) translateY(-5px);
      }
      50% {
        transform: scaleX(0.9) scaleY(1.1) translateY(-10px);
      }
      75% {
        transform: scaleX(1) scaleY(1) translateY(-5px);
      }
      100% {
        transform: scaleX(1.1) scaleY(0.9) translateY(0);
      }
    }
  </style>
</head>
<body>
  <div class="flame"></div>
</body>
</html>
