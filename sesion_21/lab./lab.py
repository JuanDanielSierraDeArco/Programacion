import os

#nombre del archivo
archivo_datos = "datos.txt"

def escribir_archivo(datos):
    with open(archivo_datos, "w") as archivo:
        for registro in datos:
            archivo.write(",".join(registro) + "\n")


def leer_archivo():
    if os.path.exists(archivo_datos):
        with open(archivo_datos,"r") as archivo:
            datos = [linea.strip().split(",") for linea in archivo.readlines()]
    else:
        datos = []
    return datos

def ingresar():
    datos = leer_archivo()
    id1 = input("Ingrese identificacion ")
    apellido = input("Ingresa apellido ")
    nombre = input("ingrese nombre ")
    datos.append([id1, apellido, nombre])
    escribir_archivo(datos)
    print("agragado con exito")

ingresar()