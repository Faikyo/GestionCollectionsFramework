<?php

namespace App\DataFixtures;

use App\Entity\Collections;
use App\Entity\Element;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CollectionsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        // Créer 3 collections
        for ($i = 0; $i < 3; $i++) {
            $collection = new Collections();
            $collection->setTitre($faker->words(3, true));
            $collection->setDescription($faker->optional()->text);
            $collection->setDate($faker->dateTimeThisYear());

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
}
