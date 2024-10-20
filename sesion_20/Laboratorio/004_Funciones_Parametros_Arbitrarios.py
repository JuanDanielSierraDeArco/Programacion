print('- Escribe una función llamada `mayor_valor` que acepte un número arbitrario de argumentos y retorne el mayor valor.\n')


def mayor_valor(*numeros):
    return max(numeros)

print('El mayor valor es :', mayor_valor(500, 2, 900, 700, 86, 987))

