# Mire-de-connexion pour enfants sous GNU/Linux

# Auteurs
Cette mire de connexion a été conçue par un stagiaire de l'entité EOLE avec l'aide des membres de cette entité.

# De quoi s'agit-t-il ?
Il s'agit d'une mire de connexion conçue spécialement pour des enfants en classe de maternelle. La particularité de cette mire est que le mot de passe se construit à partir d'images. Cela permet aux enfants de retenir plus facilement leur mot de passe.

# Mode de fonctionnement
1) Au début, l'utilisateur arrive sur un espace avec 2 cases :
- classe : l'utilisateur choisit une classe
- élèves : l'utilisateur choisit un élève

2) Après avoir choisi une classe et un élève, l'utilisateur est automatiquement redirigé vers l'espace de saisie du mot de passe.
Au fur et à mesure qu'il clique sur les images qui lui sont proposées, des carrés verts apparaissent en ligne. <br/>
Il peut retirer un caractère de son mot de passe en cliquant sur l'un des carrés verts. <br/>
S'il clique sur le soleil, les caractères de son mot de passe apraissent dans l'ordre de saisie à la place des carrés verts; S'il clique sur la lune, l'inverse se produit.


# Comment a-t-elle été conçue ?
Les langages Javacript, CSS et HTML sont utilisés pour intégrer l'interface graphique (front-end).
L'interprèteur est webkit et le gestionnaire d'affichage est Lightdm.
L'envoie des données (nom d'utilisateur + mot de passe) se fait via des méthodes de l'objet Javascript lightdm (documentation ici : https://doclets.io/Antergos/web-greeter/stable#dl-LightDM).

2 dossiers sont à votre disposition :
  - eole_connection_patern_browser : le fichier index.html à l'intérieur permet de tester la mire dans un navigateur web. Des faux élèves ont été générés.
  - eole_connection_patern : Il s'agit du dossier à placer au chemin suivant : ```/usr/share/lightdm-webkit/themes/``` <br />
  Pour que Lightdm comprenne qu'il s'agit bien de ce thème à choisir au démarrage de session, il faut aller dans le fichier de configuration au chemin suivant : ```/etc/lightdm/lightdm-webkit-greeter.conf```, puis y insérer le nom du dossier ```webkit-theme=eole_connection_patern```<br />

# Comment l'utiliser ?
Cette mire de connexion n'est fonctionnelle que si des utilisateurs ainsi que leur mot de passe ont été crées au préalable avec une syntaxe précise :

full name (lightdm.users.display_name) : **prénom nom** <br/>
username (lightdm.users.name) : **classe_pseudo** <br/>
password : plusieurs nombres **compris entre 0 et 8** <br/>
image (lightdm.users.image) : **pseudo.jpg** <br/>

Exemple de condition de nommage :

Full name : **Adrien Briant** <br/>
username : **ce1_adriendu21** <br/>
password : **58013** <br/>
image : **adriendu21.jpg** <br/>

Mauvais exemple de condition de nommage :

username : **adriendu21_ce1** ou **ce1_adrien_du_21** <br/>
password : **99519** ou encore **abc123** <br/>
image : **nomAléatoire.pdf** <br/>

## Remarques :
- Si vous ne mettez pas de classe (username : adriendu21), l'utilisateur adriendu21 sera automatiquement inséré dans la classe "none".<br/>
- Si vous n'attribuez pas d'image à un utilisateur, celui-ci aura une image par défaut.<br/>
- Si le mot de passe contient des nombres supérieurs à 8, vous ne pourrez pas vous authentifier avec cette mire de connexion.<br/>
- **Le mot de passe est conçu de cette sorte : La première image en haut à gauche de la grille correspond au caractère 0. La deuxième image correspond au caractère 1, la troisème correspond au caractère 2, etc.**


# Raccourcis claviers
 - <- : permet de revenir à l'espace qui permet de choisir un utilisateur et sa classe
 - -> : permet d'aller à l'espace qui permet de saisir un mot de passe
 - echap : permet de fermer une fenêtre (utilisateur et classe)
