import iotry:    file = open("test.txt", "w")    # print(file.read())    file.writelines("\nHola")    file.close()    except FileNotFoundError:    print("Error: El archivo no existe")except io.UnsupportedOperation as e:    if "readable" in str(e):        print("Error: El archivo está en modo escritura")    else:        print("Error: El archivo está en modo lectura")except Exception as e:    print(f"Error: {str(e)}")import io

try:

    file = open("test.txt", "w")

    # print(file.read())

    file.writelines("\nHola")

    file.close()
    
except FileNotFoundError:
    print("Error: El archivo no existe")
except io.UnsupportedOperation as e:
    if "readable" in str(e):
        print("Error: El archivo está en modo escritura")
    else:
        print("Error: El archivo está en modo lectura")

except Exception as e:
    print(f"Error: {str(e)}")