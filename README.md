# Projet de gestion de collections

## Membres du groupe

- El Zubaidi Abdul Fattah: abdul-fattah.el-zubaidi@etu.univ-orleans.fr
- Hamid Sougouma Ali: sougouma-ali.hamid@etu.univ-orleans.fr
- Demirbas Mohamed-Furkan: mohamed-furkan.demirbas@etu.univ-orleans.fr
- Kabbarah Yasmine: yasmine.kabbarah@etu.univ-orleans.fr

Tous les membres du groupe travaillent sur le même pc.
On a utilisé Collections au lieu de Collection lors de la creation des entitées.
On a eu un problème de Guy quand on push qui n'envoie pas le backend et le frontend jusqu'à la question 6 inclus.

## Commandes utilisées

### Question 1

1. docker-compose build
2. docker-compose up -d
3. docker exec -ti framework_web_CT bash
4. symfony new backend --webapp
5. symfony server:start --no-tls --d
6. ng new frontend
7. ng serve --host 0.0.0.0 &

### Question 2

1. symfony composer require api
2. symfony console make:entity Collections
3. symfony console make:entity Element
4. symfony console doctrine:database:create
5. symfony console make:migration
6. symfony console doctrine:migrations:migrate

### Question 3

1. symfony composer require orm-fixtures --dev
2. symfony console make:fixture
3. symfony composer require fakerphp/faker
4. On a ajouté ce code dans CollectionsFixtures : 
```
public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        // Créer 3 collections
        for ($i = 0; $i < 3; $i++) {
            $collection = new Collections();
            $collection->setTitre($faker->words(3, true));
            $collection->setDescription($faker->optional()->text);
            $collection->setDateCreation($faker->dateTimeThisYear());

            $manager->persist($collection);

            $elementCount = 0;
            if($i == 0) {
                $elementCount = 10;
            }
            else if($i == 1) {
                $elementCount = 25;
            }
            else {
                $elementCount = 15;
            }
            for ($j = 0; $j < $elementCount; $j++) {
                $element = new Element();
                $element->setDesignation($faker->words(5, true));
                $element->setDescription($faker->optional()->text);
                $element->setCommentaires($faker->optional()->text);
                $element->setValeur($faker->optional()->numberBetween(1, 1000));
                $element->setCollection($collection);

                $manager->persist($element);
            }
        }

        $manager->flush();
    }
```
5. symfony console doctrine:fixtures:load

### Question 4

1. ng generate component menu
2. ng generate component accueil

### Question 5

1. ng generate component collection/collections
2. ng generate component collection/showCollection
3. ng generate component collection/updateCollection
4. ng generate service service/collection/collection
5. ng generate interface interfaces/api
Le code de l'interface api :
```
import {Collection} from "./collection/collection";


export interface apiResponse<T> {
  "@context": string,
  "@id": string,
  "@type": string,
  "hydra:member": Array<T>
}

export interface CollectionWithId extends Collection {
  id: number
}
```
6. On a import HttpClientModule dans app.module.ts
7. npm install bootstrap
8. npm install bootstrap-icons
9. On a ajouté dans styles.scss :
```
@import 'bootstrap/scss/bootstrap';
@import 'bootstrap-icons/font/bootstrap-icons';

html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
```
10. npm install markdown
11. ng generate pipe markdown
12. On a ajouté les fonctionnalités dans update-component.ts et show-component.ts
13. On a ajouté la fonctionnalité d'ajouter une collection


### Question 6

1. ng generate component element/elements
2. ng generate interface interfaces/element/element
3. ng generate component element/showElement
4. ng generate component element/updateElement
5. On a ajouté dans update-element.component.ts la fonctionnalité d'ajout d'un element en le liant a une collection
6. On a affiché les urls liées au Ids de la collection


### Question 7

1. ng add @angular/material