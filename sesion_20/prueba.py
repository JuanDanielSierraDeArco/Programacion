def suma(a, b):
    """ Esta función suma dos numeros dados y devuelve el resultado
     
    Args:
        a (int): Numero 1
        b (int): Numero 2
 
    Returns:
        int: el resultado de la suma  
    """
    try:
        return a + b
    except Exception as e:
        print("Error:", str(e))
        return False
   
print(suma(3, "f"))
 
name = input("Ingrese su nombre: ")
 
print(f"Hola, {name}")