print("Escribe una función llamada `descuento` que tome el precio de un producto y un porcentaje de descuento. La función debe retornar el precio final después de aplicar el descuento.\n")



def descuento(precio, porcentaje_descuento=10):

    return precio - (precio*(porcentaje_descuento/100)) 




precio = int(input('Ingrese precio => '))
desc = int(input('ingrese descuento => '))

print('El precio final es ', descuento(precio,desc))
print('El precio final con descuento:', descuento(precio))