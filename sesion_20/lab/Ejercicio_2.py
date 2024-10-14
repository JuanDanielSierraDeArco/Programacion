import math

def area_circulo(radio):
    return math.pi * (radio ** 2)

radio = float(input('ingrese radio => '))

print('El area del circulo es: ', area_circulo(radio))