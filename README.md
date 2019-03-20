# Mire-de-connexion pour enfants sous GNU/Linux

# Auteurs
Cette mire de connexion a été conçue par un stagiaire de l'entité EOLE avec l'aide des membres de cette entité.

# De quoi s'agit-t-il ?
Il s'agit d'une mire de connexion conçue spécialement pour des enfants en classe de maternelle. La particularité de cette est mire est que le mot de passe se fait à partir d'images. Cela permet aux enfants de retenir plus facilement leur mot de passe.

# Comment a-t-elle été conçue ?
Les langages Javacript, CSS, HTML sont utilisés pour intégrer l'interface graphique (front-end).
L'interprèteur est webkit et le gestionnaire d'affichage est Lightdm.
L'envoie des données (nom d'utilisateur + mot de passe) se fait via des méthodes de l'objet Javascript lightdm (documentation ici : https://doclets.io/Antergos/web-greeter/stable#dl-LightDM).

# Comment l'utiliser ?
Cette mire de connexion n'est fonctionnelle que si des utilisateurs ainsi que leur mot de passe ont été crées au préalable avec une syntaxe précise :

full name (lightdm.users.display_name) : prénom nom
username (lightdm.users.name) : classe_pseudo
password : plusieurs nombres compris entre 0 et 8
image (lightdm.users.image) : pseudo.jpg

Exemple de condition de nommage :

Full name : Adrien Briant
username : ce1_adriendu21
password : 58013
image : adriendu21.jpg

Mauvais exemple de condition de nommage :

username : adriendu21_ce1 ou ce1_adrien_du_21
password : 99519 ou encore abc123
image : nomAléatoire.pdf

