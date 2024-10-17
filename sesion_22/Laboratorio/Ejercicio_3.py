libro = {
    'Titulo': 'Cien años de sololedad',
    'Autor': 'Gabriel Garcia Marquez',
    'año': 19967
}
libro['genero']='Narrativa'
print(libro.keys())
elegir = input('Elige que detalles del libro quiieres ver, Titulo, Autor, año  =>')

print('El {} del libro es: {}'.format(elegir, libro[elegir]))