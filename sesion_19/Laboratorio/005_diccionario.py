#crear diccionario
calificaciones = {
    'Pablo':5.0,
    'Maria':4.5,
    'Ana':4.2,
    'Juan':4.7
}

nombre_max = max(calificaciones, key=calificaciones.get)
print(f"El estudiante con la calificacion mas alta es {nombre_max} con una calificacion de {calificaciones[nombre_max ]}.")