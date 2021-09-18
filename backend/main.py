import eel


@eel.expose
def testing():
    return "Hola desde python", 1, 1.2, True, [1, 2, 3, 4], {"name": "eel"}
# testing


eel.init('../frontend/dist')
eel.start('index.html', port=8080, size=(1040, 807))
