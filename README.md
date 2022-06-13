# Test technique de Samuel Weissgerber pour CaminoTV 

## Utilisation application

Pour utiliser le dashboard veuillez bien penser à mettre un titre à l'élément avant de l'afficher sinon le titre ne sera pas sauvegardé.
Ensuite vous pouvez consulter vos éléments sur la page d'accueil du site.

## Problèmes rencontrés

J'ai eu une petite hésitation sur le "plusieurs dashboards sur des navigateurs différents", j'ai compris cela comme étant plusieurs onglets ouverts et toutes informations changés seront automatiquement mis à jour sur l'index.
C'est donc pour cela que j'ai utilisé le local storage de Javascript pour mettre en place le rafraichissement automatique.

J'ai compris que plus tard, quand tout mon programme était écrit, qu'il fallait potentiellement que ce soit des navigateurs différents. C'est pourquoi je propose les solutions que j'aurai utilisées à la suite.

Tout d'abord j'aurai utilisé les web socket si les librairies étaient autorisées.
Et finalement j'aurais pu utiliser de l'Ajax pour aller chercher dans une base de données, toutes les X secondes et mettre à jour automatiquement les données. Mais cela aurait été très lourd pour le serveur, et du coup potentiellement un crash serait sûrement intervenu à cause du grand nombre d'appels au serveur. Également cela n'aurait pas vraiment été du temps réel, étant donné que cela aurait fait un appel tous les X secondes.

## Mot de fin

En espérant que mon test technique vous plaise. En attente de votre retour.
