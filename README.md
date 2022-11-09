# UP LOD FILE NODE - EXPRESS - MULTER
1- Protocolo HTTP subir archivos desde cliente a servidor
rfc para HHTP nos indica el content-type 
Podemos mandar el contemido de un archivo transformado en base64 en formato binario en el body que el servidor leera, las diferentes partes, cabecera y partes del body y escrbira en su sistema de archivo

boundary separador que genera automaticmante el navegador para separar cabecears del body
2- Desde servidor leer csv y enviar a DDBB mysql

Inicializar proyecto 
create a package.json first with the ``npm init`` command
.git init
Intalar Express ``npm install express`` 

`npm i dotenv -D`
variables de entorno o archivos .env para node.js y evitar exponer información sensible en tu código. Node utilza en objeto process

[Desarrollo-Util](https://github.com/Desarrollo-Util/express-multer-example)
##### Conceptos teóricos
* La subida de archivos por http tiene un estandar marcado
* Este estandar indica que el content-type de la solicitud debe ser de tipo multipart/form-data y un boundary.
* Lo primero indica el tipo de solicitud, que habitualmente es una serie de campos de un formulario, estos campos pueden contener texto plano o un archivo.
* El boundary, es una secuencia de caracteres que sirve para diferenciar cada una de las partes del mensaje http, ya que todos los campos que se envian van juntos entonces es necesario saber cuando acaba uno y empieza el siguiente.
* Cuando enviamos la solicitud desde un cliente HTTP o un navegador web, el boundary y el body se crean automaticamente, no tenemos que poner manualmente los content-disposition o content-type. *En JS simplemente añadimos la información del formulario y el content type multipart
* En el servidor debemos obtener cada uno de los valores o archivos, validarlos y almacenarlos o lo que queramos hacer con ellos.
 
####### Ejemplo de una solicitud HTTP
Headers

POST /uploads HTTP/1.2
Host: example.com
Content-Type: multipart/form-data;boundary=------------------------d74496d66958873e

Body

--------------------------d74496d66958873e
Content-Disposition: form-data; name="person"
--------------------------d74496d66958873e
Content-Disposition: form-data; name="secret"; filename="file.txt"
Content-Type: text/plain

contents of the file
--------------------------d74496d66958873e
Content-Disposition: form-data; name="imagen1"; filename="Solucion.png"
Content-Type: image/png

�PNG → IHDR♦9☺♠�D�☺sRGB��∟�♦gAMA�� �a♣ pHYs��☺�o�d��IDATx^���D ND�B� --------------------------d74496d66958873e--

##### License
Distributed under the MIT License. See LICENSE.md for more information.
