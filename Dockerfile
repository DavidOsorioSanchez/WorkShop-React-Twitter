#Porque es bueno usar docker para un proyecto?

#Dockerizar tu proyecto de React te brinda un entorno
#de desarrollo más estable, eficiente y escalable, mejorando la calidad y velocidad de tus proyectos.


# traigo la imagen de node:alpine
FROM node:alpine

# crea una carpeta /app
WORKDIR /app

# copia el package.json y el package-lock.json
COPY package*.json ./

# instala las dependencias
RUN npm install

# copia el codigo fuente
COPY . .

# ejecuta npm run build
RUN npm run build

# creamos el puerto 3000
EXPOSE 3000

# ejecutamos el comando npm start
CMD ["npm", "start"]

### comandos a segir:
#postData: se necesitan instalar docker previamente

#el comando para crear la imagen es:
# docker build -t el_nombre_que_mas_quieran .

#el comando para ejecutar la imagen es:
#docker run -d -p 3000:3000 el_nombre_de_la_imagen

### en caso de que quieran compartir la imagen con otros:
#docker push el_nombre_de_la_imagen