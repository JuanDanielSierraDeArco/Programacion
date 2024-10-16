import math

a = float(input('ingrese el valor de a'))
b = float(input('ingrese el valor de b'))
c = float(input('ingrese el valor de c'))

bn = (b)
cua = b**2
mul = 4*a*c 

discriminante = cua - mul #b^2-4ac

if discriminante < 0:
    print('la ecuación cuadrática tiene dos soluciones complejas')
elif discriminante > 0:
    print('entonces la ecuación cuadrática tiene una única solución real')
    raiz = math.sqrt(discriminante)
    x1 = (bn + raiz)/(2*a)
    x2 = (bn - raiz)/(2*a)
    print('El valoir de x1 = ', x1)
    print('El valoir de x2 = ', x2)
elif discriminante == 0:
    x1 = bn/(2*a)
    print('El valoir de x1 = ', x1)


