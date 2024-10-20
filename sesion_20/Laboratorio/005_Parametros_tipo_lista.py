print('Escribir un programa que defina por asignación una lista de 6 enteros en el bloque principal del programa.')
print('Elaborar tres funciones, la primera recibe la lista y retorna la sumaa de todos sus elementos,')
print('la segunda recibe la lista y retorna el mayor valor y la última recibe la lista y retorna el menor.\n')

def suma(lista):
    sum=0
    for x in range(len(lista)):
        sum = sum + lista[x] 

    return sum

def mayor(lista):
    may = lista[0]
    for x in range(1,len(lista)):
        if lista[x] > may:
            may = lista[x]
    return may

def menor(lista):
    men = lista[0]
    for x in range(1,len(lista)):
        if lista[x] < men:
            men = lista[x]
    return men

lista_original = []
for x in range(5):
    numero = int(input('ingrese numero a la lista => '))
    lista_original.append(numero)

print('la lista es : ', lista_original)
print('la suma de los elementos de la listas es :', suma(lista_original))
print('el numero mayor de la lita es :', mayor(lista_original))
print('el numero menor de la lita es :', menor(lista_original))