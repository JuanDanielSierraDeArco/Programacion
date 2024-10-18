#Diccionario

estudiantes = {
    'juan':5.0,
    'Ana':4.2,
    'Luis':4.5
}

nombre = input("ingrese el nombre del estudiante: ")
calificaciones = float(input("ingrese la calificacion: "))

if nombre in estudiantes:
    estudiantes[nombre] = calificaciones
else:
    estudiantes[nombre] = calificaciones

print("Informacion de los estudiantes")

for nombre, calificaciones in estudiantes.items():
    print(f"{nombre} tiene una calificacion de {calificaciones}")