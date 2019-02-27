from faker import Faker
import json
from random import randrange, randint

f = Faker("fr_FR")

pupillsJson = {
"cp": [],
"ce1": [],
"maternelle": []
}

sources = ["img/michel.jpg", "img/cuisinier.png", "img/bear.png"]




for classe in pupillsJson:

    for i in range(5):
        number = randrange(len(sources))
        #file.write(class, "_", f.user_name().replace("-", "")+ ";"+ f.name() + " " + f.last_name() + "\n")
        login = f.user_name().replace('-', '')
        pwd = f"{randint(0, 8)}{randint(0, 8)}{randint(0, 8)}{randint(0, 8)}{randint(0, 8)}"
        objet = {"display_name": f'{f.name()} {f.last_name()}' , "name": login, "image": sources[number], "password": pwd }

        pupillsJson[classe].append(objet)




with open("eleves.json", "w") as file:
    file.write(json.dumps(pupillsJson))
