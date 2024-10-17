#cantidad de digitos

continuar ='s'
while (continuar.lower()=='s'):
    numero = int(input('Ingrese un numero: de 0 a 999 : '))

    if (numero < 10):
        print('El numero', numero, 'tiene un digito')

    elif(numero >= 10 and numero < 100):
        print('El numero', numero, 'tiene dos digito')
    else:
        print('El numero', numero, 'tiene tres digito')
    
    continuar = input('Desea continuar s/n =>')

print('programa terminado')