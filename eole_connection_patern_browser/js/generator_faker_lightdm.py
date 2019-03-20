from faker import Faker
import json
from random import randrange, randint

f = Faker("fr_FR")

lihgtdm = {
"users": [{
    "name" : "ce1_test",
    "display_name" : "Toto tata",
    "image" : "img/bla.png",
    "password" : "12344"
}]
}

sources = ["img/michel.jpg", "img/cuisinier.png", "img/bear.png"]
classes = ["ce1", "cp", "maternelle1", "maternelle2", "maternelle"]




for classe in lihgtdm:

    for i in range(15):
        number = randrange(len(sources))
        c = randrange(len(classes))
        #file.write(class, "_", f.user_name().replace("-", "")+ ";"+ f.name() + " " + f.last_name() + "\n")
        name = f"{classes[c]}_{f.user_name().replace('-', '')}"
        pwd = f"{randint(0, 8)}{randint(0, 8)}{randint(0, 8)}{randint(0, 8)}{randint(0, 8)}"
        objet = {"display_name": f'{f.name()} {f.last_name()}' , "name": name, "image": sources[number], "password": pwd }

        lihgtdm["users"].append(objet)




with open("lightdm_faker.json", "w") as file:
    file.write(json.dumps(lihgtdm))
