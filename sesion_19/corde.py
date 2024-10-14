cant1=0 #++
cant2=0 #+-
cant3=0 #-+
cant4=0 #--
n=int(input("Cantidad de puntos:"))
for f in range(n):
    x=int(input("Ingrese coordenada x:"))
    y=int(input("Ingrese coordenada y:"))

    if(x >= 0 ):
        if(y > 0):
                cant1 += 1
            else:
                cant2 +=1
        else:
            if(y > 0):
                cant3 += 1
            else:
                cant4 +=1
    else:
        print('alguno de los puntos esta en su coordenada origen')
print('Cantidad de puntos en el primer plano',cant1)
print('Cantidad de puntos en el segundo plano',cant3)
print('Cantidad de puntos en el tercer plano',cant4)
print('Cantidad de puntos en el cuarto plano',cant2)
            