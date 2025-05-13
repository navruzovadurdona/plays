import pygame
import sys

# Инициализация Pygame
pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("👧👧 Прогулка по природе")

clock = pygame.time.Clock()

# Цвета
SKY_BLUE = (135, 206, 235)
GRASS_GREEN = (124, 252, 0)
SUN_YELLOW = (255, 223, 0)
WHITE = (255, 255, 255)
PINK = (255, 182, 193)
PURPLE = (186, 85, 211)

# Координаты подружек
girl1_x = 100
girl2_x = 140
girl_y = 450

# Солнце
sun_x = 650
sun_y = 100
sun_radius = 40

# Основной цикл
running = True
while running:
    screen.fill(SKY_BLUE)

    # Рисуем траву
    pygame.draw.rect(screen, GRASS_GREEN, (0, HEIGHT//2, WIDTH, HEIGHT//2))

    # Рисуем солнце
    pygame.draw.circle(screen, SUN_YELLOW, (sun_x, sun_y), sun_radius)

    # Рисуем подружек (как кружки и прямоугольники)
    pygame.draw.circle(screen, WHITE, (girl1_x + 15, girl_y - 20), 15)  # Голова
    pygame.draw.rect(screen, PINK, (girl1_x, girl_y, 30, 50))  # Тело

    pygame.draw.circle(screen, WHITE, (girl2_x + 15, girl_y - 20), 15)
    pygame.draw.rect(screen, PURPLE, (girl2_x, girl_y, 30, 50))

    # Движение подружек
    girl1_x += 1
    girl2_x += 1

    # Сброс позиции, если ушли за экран
    if girl1_x > WIDTH:
        girl1_x = -30
        girl2_x = girl1_x + 40

    # Обработка событий
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    pygame.display.flip()
    clock.tick(60)

pygame.quit()
sys.exit()
