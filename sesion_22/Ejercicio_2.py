fruta_ingreso = input('ingrese una fruta =>')
frutas= ['Pera','Manzana','Uva','Banano','Fresa']
print(frutas)
if (not (fruta_ingreso in frutas )):
    frutas.append(fruta_ingreso)

print(frutas)

print('la tercera fruta es :', frutas[2])
