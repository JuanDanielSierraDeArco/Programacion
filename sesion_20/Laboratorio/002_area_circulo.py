import math

print('Escribe una función llamada `area_circulo` que tome el radio de un círculo como parámetro y retorne su área.\n')

def area_circulo(radio):
    return math.pi * (radio ** 2)

radio = float(input('ingrese el radio del circulo => '))

print(f'El area del circulo es:  {area_circulo(radio):.2f}')