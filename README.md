# Panjrud Ensemble

https://panjrud-ensemble.com

## Documentation

Les informations sur les musiciens, les spectacles et les autres données sont stockées dans des fichiers Markdown dans le dossier `src/data`. Vous pouvez modifier ces fichiers pour mettre à jour le contenu du site.

La propriété `draft: true` permet de mettre le fichier en brouillon. Utiliser `draft: false` pour publier le fichier.

Le contenu des fichiers est écrit en Markdown. https://www.markdownguide.org/cheat-sheet/

#### Ajouter un concert

https://github.com/jonathanfallon/panjrud-ensemble/tree/main/src/data/shows

1. Ouvrir un fichier existant et copier son contenu dans `src/data/shows/`.
2. Créer un nouveau fichier avec le nom de la date et du lieu du concert, par exemple `2024-12-31-paris.md`.
3. Coller le contenu copié dans le nouveau fichier.
4. Mettre à jour les métadonnées en haut du fichier (titre, description, lieu, date).
5. Ajouter les détails du concert sous les métadonnées.

#### Modifier un musicien

https://github.com/jonathanfallon/panjrud-ensemble/tree/main/src/data/musicians

- Editer le fichier correspondant dans `src/data/musicians/`.
- Changer le numéro dans le nom du fichier pour changer l'ordre d'affichage (croissant).
- Remplacer l'image du musicien dans `public/images/musicians/` en conservant le même nom de fichier.

Les portraits des musiciens font 356x465 pixels.

#### Modifier ou ajouter une vidéo

https://github.com/jonathanfallon/panjrud-ensemble/tree/main/src/data/videos

1. Ouvrir un fichier existant et copier son contenu dans `src/data/videos/`.
2. Créer un nouveau fichier avec un nom descriptif, par exemple `05_concert-at-museum.md`.
3. Coller le contenu copié dans le nouveau fichier.
4. Mettre à jour les métadonnées en haut du fichier (titre, url).

#### Modifier la page projet

https://github.com/jonathanfallon/panjrud-ensemble/blob/main/src/data/pages/project.md

## Credits and License

Made with Astro + [Cosmic Themes](https://cosmicthemes.com/)

This project is open source and available under the [GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

[License details](https://cosmicthemes.com/license/).
