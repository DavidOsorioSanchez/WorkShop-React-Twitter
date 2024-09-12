<h1 align="center">Para que sirve el .gitignore? 📑</h1>

<p>
    El archivo <code>.gitignore</code> es un archivo que se utiliza para especificar un conjunto de archivos y carpetas que Git debe ignorar cuando se realiza un commit.
    <br>
    <br>
    Por lo general suele excluir archivos y carpetas que no son necesarios para el funcionamiento del proyecto, como archivos de configuración, archivos de datos, archivos de pruebas, etc.
</p>

<div align="center">
  <img src="https://i.imgur.com/Cug12UH.png" alt="gitignore" width="170" >
</div>


<h2> Archivos y carpetas que se deben incluir en el repositorio. 🧾</h2>

<dl>
    <dd>
      <p>
        <b><i>*.log:</i></b> 
        Archivos de registro.
        Cada gestor de paquetes tiene su propio formato de registro, pero son inportates no incluidos en el repositorio, ya que toca datos sensibles.
      </p>
    </dd>
    <dd>
      <p>
        <b><i>node_modules:</i></b> 
        Carpetas que contienen los paquetes instalados por npm. suele ser muy grande y no se debe incluir en el repositorio.
      </p>
    </dd>
    <dd>
      <p>
        <b><i>dist:</i></b> 
        Carpetas donde se compilan los archivos de código fuente. si se incluye en el repositorio, suele ser pesada, es facil de sobreescribir y puede causar problemas de compatibilidad.
      </p>
    </dd>
    <dd>
      <p>
        <b><i>Configuracion del IDE:</i></b>
        Las carpetas de configuración del IDE, como .vscode, .idea, etc. Las carpetas de IDE son configuraciones locales y personalizadas que cada desarrollador tiene en su máquina para optimizar su flujo de trabajo.
      </p>
    </dd>
    <dd>
        <p>
        <b><i>.env:</i></b>
        en caso de que se incluyan las variables de entorno en el repositorio, puede ser peligroso porque pueden contener credenciales o otros datos sensibles.
      </p>  
    </dd>
</dl>

<div align="center">
  <img src="https://i.imgur.com/s8w2PZQ.png" alt="package.json" width="400" >
</div>