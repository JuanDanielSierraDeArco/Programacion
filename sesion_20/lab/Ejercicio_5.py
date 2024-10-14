def suma(lista):
    sum=0
    for x in range(len(lista)):
        sum = sum + lista[x] 

    return sum

def mayor(lista):
    return max(lista)

def menor(lista):
    return min(lista)

lista_original = [2, 4, 5, 6, 7, 8]
print('la lista es : ', lista_original)
print('la suma de los elementos de la listas es :', suma(lista_original))
print('el numero mayor de la lita es :', mayor(lista_original))
print('el numero menor de la lita es :', menor(lista_original))