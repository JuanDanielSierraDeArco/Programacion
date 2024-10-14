cant1=0 #++
cant2=0 #+- 
cant3=0 #-+
cant4=0 #--
n=int(input("Cantidad de puntos:"))
for f in range(n):
    x=int(input("Ingrese coordenada x:"))
    y=int(input("Ingrese coordenada y:"))
    if((y and x) != 0):
        if(x > 0 ):
            if(y > 0):
                cant1 += 1
            else:
                cant2 +=1
        else:
            if(y > 0):
                cant3 += 1
            else:
                cant4 +=1
    elif(y or x != 0):
        if (x==0):
            if(y>0):
                print('el punto esta en el eje Y+')
            else:
                print('el punto esta en el eje Y-')
        elif(y==0):
            if(x>0):
                print('el punto esta en el eje X+')
            else:
                print('el punto esta en el eje X-')
    else:
        print('el punto esta en el origien')            

         
print('Cantidad de puntos en el primer plano',cant1)
print('Cantidad de puntos en el segundo plano',cant3)
print('Cantidad de puntos en el tercer plano',cant4)
print('Cantidad de puntos en el cuarto plano',cant2)
            