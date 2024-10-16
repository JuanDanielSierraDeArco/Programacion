try:
    entero = int(input('Ingrese numero entero => '))
    flotante = float(input('Ingrese numero entero => '))

    resultado = entero * flotante

    print(resultado, type(resultado))
    print("El resultado de la suma es:", entero + flotante)
    print("El resultado de la resta es:", entero - flotante)
    print("El resultado de la multiplicacion es:", resultado)
    print("El resultado de la división es: {:.2f}".format(entero / flotante))

 
except ZeroDivisionError:
    print("Error: No se puede dividir por cero.")
