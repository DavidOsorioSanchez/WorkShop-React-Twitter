<h1 align="center">¿Qué es ESLINTRC? 📑</h1>

<p>
    Es un archivo de configuración que se utiliza para especificar reglas de estilo y convenciones para el uso de JavaScript/TypeScript en un proyecto. Es una herramienta útil para mantener el código consistente y organizado.
</p>

<div align="center">
  <img src="https://i.imgur.com/PdILzhu.png" alt="ESLINTRC" width="170" >
</div>

<h2 align="center">Parametros de ESLINTRC 🧾</h2>

<p style="filter: brightness(0.7);">PostData: Tome el codigo ya modificado de este workshop.</p>

<dl>
    <dd>
      <p>
        <b><i>Root:</i></b>
        Indica que el archivo es el archivo raíz del proyecto. Es el archivo que se ejecuta cuando se ejecuta el comando <code>npm run lint</code>.
      </p>
    </dd>
    <dd>
      <p>
        <b><i>env:</i></b>
        Indica que el archivo se ejecuta en el navegador o en Node.js. Es el archivo que se ejecuta cuando se ejecuta el comando <code>npm run lint</code>.
      </p>
    </dd>
</dl>

<dl>
    <dt><h4> extends: </h4></dt>
      <dd>
        <p>
          <b><i>eslint:recommended:</i></b> 
          <code>eslint:recommended</code> es una configuración predefinida en ESLint que establece un conjunto de reglas básicas y buenas prácticas para escribir código JavaScript limpio y consistente.
        </p>  
      </dd>
      <dd>
        <p>
          <b><i>plugin:react/recommended:</i></b> 
          <code>plugin:react/recommended</code> es una configuración que proporciona reglas específicas para React.
        </p>  
      </dd>
      <dd>
        <p>
          <b><i>plugin:react/jsx-runtime:</i></b> 
          <code>plugin:react/jsx-runtime</code> es una configuración que se utiliza específicamente para proyectos React que utilizan el paquete 
        </p>  
      </dd>
      <dd>
        <p>
          <b><i>plugin:react-hooks/recommended:</i></b> 
          <code>plugin:react-hooks/recommended</code>Indica que se deben aplicar las reglas de estilo recomendadas por React Hooks..
        </p>  
      </dd>
</dl>

<dl>
    <dd>
      <p>
        <b><i>ignorePatterns:</i></b> 
        Indica que se deben ignorar los archivos y carpetas especificados. Es el archivo que se ejecuta cuando se ejecuta el comando <code>npm run lint</code>.
      </p>  
    </dd>
    <dd>
      <p>
        <b><i>settings:</i></b> 
        Esta configuración específica en un archivo <code>.eslintrc.js</code> le indica a ESLint qué versión de React estás utilizando en tu proyecto. 
      </p>  
    </dd>
    <dd>
      <p>
        <b><i>plugins:</i></b> 
        <code>plugins: ['react-refresh'] </code> es una configuración que se añade a un archivo <code> .eslintrc.js </code> para habilitar el plugin <code>eslint-plugin-react-refresh</code> en un proyecto React. Este plugin tiene como objetivo principal validar que tus componentes React puedan ser actualizados de forma segura utilizando la característica de "Fast Refresh".
      </p>  
    </dd>
    <dt><h4> rules: </h4></dt>
      <dd>
        <p>
          <b><i>react/prop-types:</i></b> 
          <code>react/prop-types : "off"</code> La configuración indica que ESLint deshabilitará la verificación de los tipos de las propiedades (props) de los componentes.
        </p>
      </dd>
      <dd>
        <p>
          <b><i>no-unused-vars:</i></b> 
          <code>no-unused-vars: "off"</code> se utiliza para identificar variables no utilizadas en un archivo.
          </p>
      </dd>
      <dd>
        <p>
          <b><i>react/jsx-no-target-blank:</i></b>
           es una regla predefinida en ESLint que se utiliza para verificar si los elementos <code>a</code> en tu código React tienen el atributo <code>target="_blank"</code>. Este atributo se utiliza para abrir enlaces en una nueva pestaña o ventana.
        </p>
      </dd>
      <dd>
        <p>
          <b><i>react-refresh/only-export-components:</i></b>
           es una configuración predefinida en ESLint que se utiliza para verificar que solo se exporten componentes React desde los módulos de tu proyecto.
        </p>
      </dd>
</dl>






<div align="center">
  <img src="https://i.imgur.com/uEFQHAo.png" alt="package.json" width="500" >
</div>

