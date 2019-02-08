from faker import Faker

f = Faker("fr_FR")



with open("maternelle1.txt", "w") as file:

    for i in range(15):

        file.write(f.user_name().replace("-", "")+ "\n")

with open("cp1.txt", "w") as file:

    for i in range(15):

        file.write(f.user_name().replace("-", "")+ "\n")

with open("ce1.txt", "w") as file:

    for i in range(15):

        file.write(f.user_name().replace("-", "")+ "\n")
