from flask import Flask, render_template, redirect, request, url_for, g
from database import Database
import random
app = Flask(__name__, static_url_path = "", static_folder = "static")

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()

@app.route('/')
def page_main():
    db = get_db()
    list_animaux = db.get_animaux()
    list_id = []
    for item in list_animaux:
        list_id.append(item['id'])
    list_animaux_aleatoire = []
 
    random.randint
  
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))

    return render_template('Acceuil.html', liste = list_animaux_aleatoire)

@app.route('/Acceuil.html/')
def page_acceuil():
    db = get_db()
    list_animaux = db.get_animaux()
    list_id = []
    for item in list_animaux:
        list_id.append(item['id'])
    list_animaux_aleatoire = []
	
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
    list_animaux_aleatoire.append(
        db.get_animal(list_id[random.randint(0,len(list_id)) - 1]))
 
    return render_template('Acceuil.html', liste = list_animaux_aleatoire)

@app.route('/MiseAdoption.html/')
def page_informations():
    return render_template('MiseAdoption.html')

@app.route('/AnimauxDisponible.html/')
def page_animaux_disponibles():
    db = get_db()
    list_animaux = db.get_animaux()
    return render_template('AnimauxDisponible.html', 
        listetotale = list_animaux)
  
@app.route('/creerPage', methods=['POST'])
def page_animal():
    db = get_db()
    id_animal = request.form['idanimal']	
    animal = db.get_animal(id_animal) 
	
    return render_template('Animal.html', animal = animal)
 
@app.route('/query', methods=["GET"])
def query():
    query = request.args.get("q")
    db = get_db()
    list_animaux = db.get_animaux()
    animaux_trouver = []
    erreur = ""
    for item in list_animaux:

        if query in item['nom'].lower() or query in item['espece'].lower():
            animaux_trouver.append(item)
            bool = True
        elif query in item['nom'] or query in item['espece']: 
            animaux_trouver.append(item)
            bool = True
      
    if len(animaux_trouver) == 0:
        erreur = "Aucun resultat trouver"
        bool = False
  
    return render_template('ListeTrouver.html', 
        animaux = animaux_trouver, erreur = erreur, bool = bool)
  
@app.route('/envoyer', methods=['POST'])
def donnees_formulaire():
    nom = request.form['nomanimal']
    espece = request.form['especeanimal']
    race = request.form['raceanimal']
    age = request.form['ageanimal']
    description = request.form['descriptionanimal']
    courriel = request.form['email']
    adresse = request.form['adressecivique']
    ville = request.form['ville']
    cp = request.form['codepostal']
  
    db = get_db()
    id_dernier_animal = db.add_animal(nom,espece,
        race,age,description,courriel,adresse,ville,cp)
  
    return redirect(url_for('nouveau_animal', 
        id_dernier_animal = id_dernier_animal))
 
@app.route('/nouveau')
def nouveau_animal():
    id_dernier_animal = request.args['id_dernier_animal']
    db = get_db()
    dernier_animal_creer = db.get_animal(id_dernier_animal)
 
    return render_template('Animal.html', animal = dernier_animal_creer)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
