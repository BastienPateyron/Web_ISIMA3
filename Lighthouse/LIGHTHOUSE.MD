# Axes d'amélioration

## Performance 72/100
### Photo
#### Problème
La photo est beaucoup trop lourde (8 Mo à elle seule)

#### Solution
1. Réduire la taille  
1.1 En passant vers du webp ?  
    Solution alternative pour safari qui ne supporte pas webp
    ```html
    <picture>
    <source srcset="
        /uploads/img_small.webp 1x,
        /uploads/img_big.webp 2x" type="image/webp">
    <source srcset="
        /uploads/img_small.jpg 1x, 
        /uploads/img_big.jpg 2x" type="image/jpeg">
    <img src="/uploads/img_small.jpg">
    </picture>
    ```

1.2 En utilisant du JPEG compressé ?
2. Pré-charger la photo
3. Mettre un cache plus long

#### Nouveau score
**98/100 (+ 26)**


### Eliminate render-blocking ressources
#### Problème
On charge des ressources externes:  
 - Bootstrap (250 ms): https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css
 - Raleway, une Police (210 ms): https://fonts.googleapis.com/css?family=Raleway

Elles mettent chacunes au moins 200 ms pour se charger.

#### Solution
Il faut intégrer ce contenu directement dans le code source

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

