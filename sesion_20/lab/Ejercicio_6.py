def mascaracteres(palabra):
    pos = 0;
    for x in range(len(palabra)):
        if len(palabra[x]) > len(palabra[pos]):
            pos = x
    return palabra[pos]

palabras=["enero", "febrero", "marzo", "abril", "mayo", "junio"]
print("Palabra con mas caracteres:",mascaracteres(palabras))

def mascaracteres1(palabra):
    pos = palabras[0]  # Inicializar con la primera palabra
    for palabra in palabras[1:]:  # Iterar sobre las palabras a partir de la segunda
        if len(palabra) > len(pos):  # Comparar longitudes
            pos = palabra  # Actualizar si encontramos una palabra más larga
    return pos

print("Palabra con mas caracteres:",mascaracteres1(palabras))