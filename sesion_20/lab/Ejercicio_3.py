def descuento(precio, porcentaje_descuento=10):

    return precio - (precio*(porcentaje_descuento/100)) 




precio = int(input('Ingrese precio =>'))
desc = int(input('ingrese descuento=>'))

print('El precio final es ', descuento(precio,desc))
print('El precio final es ', descuento(precio))