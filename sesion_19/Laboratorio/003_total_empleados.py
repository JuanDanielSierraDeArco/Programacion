#Total empleados
n = int(input("Cuantos empleados tiene la empresa: "))
x = 1
conta1 = 0
conta2 = 0
gastos = 0

while x <= n :
    sueldo = float(input("Ingrese el sueldo del empleado: "))
    if sueldo <= 3000000:
        conta1 = conta1 + 1
    else:
        conta2 = conta2 + 1
    gastos = gastos + sueldo
    x = x + 1

print("La cantidad de empleados que ganan menos de 3000000 :", conta1)
print("La cantidad de empleados que ganan mas de 3000000 :", conta2)
print("El gasto total es :", gastos)