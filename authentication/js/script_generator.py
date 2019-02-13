from faker import Faker
import json

f = Faker("fr_FR")

pupillsJson = {
"cp": [],
"ce1": [],
"maternelle": []
}



for classe in pupillsJson:

    for i in range(5):
        #file.write(class, "_", f.user_name().replace("-", "")+ ";"+ f.name() + " " + f.last_name() + "\n")
        login = f.user_name().replace('-', '')
        objet = {"display_name": f'{f.name()} {f.last_name()}' , "name": login, "image": f"img/michel.jpg"}

        pupillsJson[classe].append(objet)




with open("eleves.json", "w") as file:
    file.write(json.dumps(pupillsJson))
