print("Escribir una función que reciba una lista de string y nos retorne el que tiene más caracteres.\n")


def mascaracteres(palabra):
    pos = 0;
    for x in range(len(palabra)):
        if len(palabra[x]) > len(palabra[pos]):
            pos = x
    return palabra[pos]

palabras = []
for x in range(5):
    palabra = input('ingrese numero a la lista => ')
    palabras.append(palabra)

print("Palabra con mas caracteres:",mascaracteres(palabras))