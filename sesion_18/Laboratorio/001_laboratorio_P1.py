#Definir y capturar valores por teclado

nombre = input("Ingrese un nombre: ")
edad = int(input("Ingrese edad: "))
estatura = float(input("Ingrese tu estatura"))
estudias = input("Estudias ?").upper()=="SI" 

print("Hola", nombre,"\ntienes", edad, "años", "\nmides", estatura, "mts", "\nestudias ?", estudias)