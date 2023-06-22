# PS-Translate.js

[es] Sencillo script en JavaScript para implementar multilenguaje en aplicaciones web mediante el uso de un diccionario JSON personalizado.

[en] Simple JavaScript script to implement multilanguage in web applications using a custom JSON dictionary.

LINK: [DEMO](https://github.com/pandao/editor.md "Heading link")

###Modo de uso / Getting Started

[es] Este es un ejemplo básico para comenzar a usar PS-Translate.js:
[en] This is a basic example to get started with PS-Translate.js:

- [es] Vincule el archivo ps-translate.js a su proyecto HTML
- [en] Link the ps-translate.js file to your HTML project

```html
<script src="ps-translate.js"></script>
```
- [es] Construya el objeto JSON que contendrá la estructura del diccionario (Llave > Idiomas > Traducción)
- [en] Construct the JSON object that will contain the dictionary structure (Key > Languages > Translation)

```javascript
const langJson = {
      "title":
      {
        "en": "Translation example",
        "es": "Ejemplo de traducción"
      },
      "hello":
      {
        "en": "Hello world",
        "es": "Hola mundo"
      }
}
```

- [es] Inicialice un objeto de la clase PsTranslate, ésta recibe dos argumentos obligatorios, el diccionario en formato JSON y el lenguaje por defecto:
- [en] Initialize an object of the PsTranslate class, it receives two mandatory arguments, the dictionary in JSON format and the default language:

```javascript
const pst = new PsTranslate(langJson, 'en');
```
- [es] Use la clase CSS 'ps-translate' y el atributo 'data-key' en las etiquetas HTML donde cuyo texto de su contenido desea aplicar la traducción. Si lo desea puede adicionar un texto por defecto en el contenido de la etiqueta, o podría dejarla en blanco, recuerde que éste texto será reemplazado por la traducción.:
- [en] Use the 'ps-translate' CSS class and the 'data-key' attribute in the HTML tags where the text of your content you want to apply the translation. If you wish, you can add a default text in the content of the tag, or you could leave it blank, remember that this text will be replaced by the translation.:

```html
<h1 class="ps-translate" data-key="title">Default text</h1>
<div class="ps-translate" data-key="hello">Default text</div>
```
> [es] El atributo data-key contendrá como valor el mismo nombre de la llave principal que se utilizó en el diccionario JSON
> [en] The data-key attribute will contain as a value the same name of the primary key that was used in the JSON dictionary.

- [es] Listo! Puede usar la función translateAll2() para cambiar el lenguaje de su contenido, recuerde que ésta función recibe como argumento obligatorio la llave del lenguaje requerido:
- [en] Done! You can use the translateAll2() function to change the language of your content, remember that this function receives the required language key as a mandatory argument:

```javascript
pst.translateAll2('es');
pst.translateAll2('en');
```
###Otras funciones / Other functions

####getTranslation(key, lang)
[es] Retorna la traducción de una llave en un lenguaje dado:
[en] Returns the translation of a key in a given language:

```javascript
alert( pst.getTranslation('title', 'es') );
```

####setTranslation(key, lang, text) 
[es] Cambia temporalmente el texto de la traducción de una llave en el lenguaje dado:
[en] Temporarily change the text of the translation of a key in the given language:

```javascript
pst.setTranslation('hello', 'es', 'Hola universo');
pst.setTranslation('hello', 'en', 'Hello universe');
```

####addTranslation(newKey, objTranslation) 
[es] Agrega temporalmente una nueva llave y elementos de traducción:
[en] Temporarily adds a new key and translation elements:

```javascript
pst.addTranslation('developer', {"en": "Developed by PluginSoft", "es": "Desarrollado por PluginSoft"});
```
> [es] Las funciones setTranslation y addTranslation NO modifican el dicionario de forma permanente, los cambios se perderán una vez recargue la página.
> [en] The getTranslation and addTranslation functions DO NOT modify the dictionary permanently, the changes will be lost once you reload the page.

##Variables

####activeLang

[es] Contiene la llave actual del lenguaje activado por la última ejecución de la función translateAll2.
[en] Contains the current key of the language activated by the last execution of the translateAll2 function.

```javascript
pst.translateAll2('es');
console.log( pst.activeLang ); //Returns: 'es'
pst.translateAll2('en');
console.log( pst.activeLang ); //Returns: 'en'
```

####defaultLang

[es] Contiene la llave del lenguaje indicado al momento de inicializar el objeto de la clase PsTranslate.
[en] Contains the key of the language indicated when initializing the object of the PsTranslate class.

```javascript
const pst = new PsTranslate(langJson, 'en');
pst.translateAll2('es');
console.log( pst.defaultLang ); //Returns: 'en'
```

####dictionary

[es] Contiene el objeto JSON usado en la vista actual. Éste contiene las posibles modificaciones temporales realizadas con las funciones setTranslation y addTranslation.
[en] Contains the JSON object used in the current view. This contains the possible temporary modifications made with the setTranslation and addTranslation functions.

```javascript
const langJson = {
      "title":
      {
        "en": "Translation example",
        "es": "Ejemplo de traducción"
      },
      "hello":
      {
        "en": "Hello world",
        "es": "Hola mundo"
      }
}

const pst = new PsTranslate(langJson, 'en');

pst.addTranslation('developer', {"en": "Developed by PluginSoft", "es": "Desarrollado por PluginSoft"});

console.log(pst.dictionary);
/* Returns the object:
{
      "title":
      {
        "en": "Translation example",
        "es": "Ejemplo de traducción"
      },
      "hello":
      {
        "en": "Hello world",
        "es": "Hola mundo"
      },
      "developer":
      {
        "en": "Developed by PluginSoft",
        "es": "Desarrollado por PluginSoft"
      }
}
*/
```
