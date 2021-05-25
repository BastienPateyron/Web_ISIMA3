# Axes d'amélioration

## Performance 72/100
### Photo
#### Problème
La photo est beaucoup trop lourde (8 Mo à elle seule)

#### Solution : Optimiser la taille de la photo  
1. J'ai passé ma photo au format webp. Je suis passé de 8 Mo à 670 Kb
2. Je propose différents résolutions de photo en fonction de la taille de l'écran

Pour cela j'utilise l'attribut 'srcset' de la balise img comme suit:
```html
<img 
    title="Photo de Bastien" 
    alt="Photo de Bastien"
    class="myphoto"
    src="images/photo/photo-256.webp"
    srcset="
    images/photo/photo-1024.webp  1800w,
    images/photo/photo-512.webp   1300w,
    images/photo/photo-256.webp   1000w,
    images/photo/photo-128.webp    800w,
">  
```

#### Nouveau score
**98/100 (+ 26)**


### Eliminate render-blocking ressources
#### Problème
On charge des ressources externes:  
 - Bootstrap (250 ms): https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css
 - Raleway, une Police (210 ms): https://fonts.googleapis.com/css?family=Raleway

Elles mettent chacunes au moins 200 ms pour se charger.

#### Solution : Différer le chargement de bootstrap
En différant le chargement de bootstrap qui est relativement lourd, on affiche ainsi le contenu en priorité sans attendre d'avoir fini de charger css.  

On utilise pour cela le code suivant  
```html
<link
    rel         = "preload"
    href        = "https://fonts.googleapis.com/css?family=Raleway"
    as          = "style"
    onload      = "this.onload=null;this.rel='stylesheet'">
<noscript>
<link   
    rel         = "stylesheet"
    href        = "https://fonts.googleapis.com/css?family=Raleway"
    integrity   = "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
    crossorigin = "anonymous">
</noscript>
```
  

#### Nouveau score
TODO

## Accessibilité
TODO

## Best Practices
### Activer HTTPS
#### Problème
Les requêtes ne sont aps chiffrées et on a pas "le petit cadenas vert" qui rassure

#### Solution
Utiliser un certificat Let's encrypt

TODO

