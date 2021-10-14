## Clonar un repositorio de Github

```
git clone <url-de-repositorio>  // recomendable para trabajar de manera colaborativa

```
## Actualizar un working directorio local desde un repositorio de Github (lo inverso al push)

```
git pull <nombre-remoto> <rama> \\ Importante realizar el pull desde la rama que traemos

```
 En la mayoría de los casos será:

 git pull origin main

 La operación pull lo que hace es traer el código de la rama especificada y hacer un merge con esos cambios, esto da lugar:

 - o bien fast forward
 -o bien conflicto (divergencia) => proceder igual que con el comando merge

 ## Actualizar un working directory local desde un repositorio de Github sin merge

 ```
 git fetch <nombre-remoto><rama>
```

La operacion fetch lo que hace es traer el código de la rama especificada y esos cambios los lleva a la etapa staging area para que posteriormente decidamos si los queremos integrar con uno o varios commit

## Pull request

Peticion de integracion de cambios en el codigo en un repositorio remoto 
- deben estar en una rama distinta a la principal, dicho de otra manera, si cuando hacemos un push lo hacemos con una rama distinta a la principal, si esa rama no existe en el remoto se crea la pull request.

- como la rama no existe cuando se realize la operacion push llevara esta opcion:
```
git push --set-upstream origin <rama>
```


