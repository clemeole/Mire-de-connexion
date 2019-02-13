

lightdm = {
  "users": [{
    "name": "ce1_toto",
    "display_name": "Kévin Brin",
    "image": "img/bin.png"
  }, {
    "name": "cp1_tata",
    "display_name": "Julia Brin",
    "image": "img/bin.png"
  }, {
    "name": "sdf",
    "display_name": "gabriel ordi",
    "image": "img/bin.png"
  }]
}



pupillsJson = {}; #{"cp1" : [{"login" : "toto", "name": "Kévin Brin", "image": "/gim/image.png"}]}

for i in lightdm["users"]:
    listLogClass = str(lightdm["users"][0]).split("_")

    if len(listLogClass) > 1:
        if pupillsJson[listLogClass[0]] in globals():
            pupillsJson[listLogClass[0]] = []
