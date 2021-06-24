# Load our set of recipes from text
# and turn them into html menus
import os

template_f = open("search-by-tag.txt","r")
search_template = template_f.read()
template_f.close()
    

def read_til_empty_line(file):
    line = file.readline()
    lines = []
    while line != "\n" and line != "":
        lines += [line.strip()]
        line = file.readline()
    return lines

def read_to_list(filename):
    f = open(filename,"r")
    lines = read_til_empty_line(f)
    f.close()
    return lines

cats = read_to_list("categories.txt")
diets = read_to_list("diets.txt")
cuisines = read_to_list("cuisines.txt")
misc = read_to_list("misc.txt")

button_str = "        <button id='{name}'>{name}</button>"
cat_buttons  = "\n".join([button_str.format(name=cat) for cat in cats])
diet_buttons = "\n".join([button_str.format(name=diet) for diet in diets])
cuis_buttons = "\n".join([button_str.format(name=cuisine) for cuisine in cuisines])
misc_buttons = "\n".join([button_str.format(name=m) for m in misc])

def read_first_line(filename):
    f = open(filename,"r")
    line = f.readline().strip()
    f.close()
    return line

recipe_names = [read_first_line("recipes_txt/"+n) for n in os.listdir("recipes_txt")\
                if n.endswith(".txt")]
recipe_str = "        <li id='{name}'><a href='{name}.html' >{name}</a></li>"
recipes = "\n".join([recipe_str.format(name=n) for n in recipe_names])

search_html = search_template.format(cats=cat_buttons,diets=diet_buttons, \
                                     cuisines=cuis_buttons,misc=misc_buttons, \
                                     recipes=recipes)

temp_file = open("search-by-tag.html~","w+")
temp_file.write(search_html)
temp_file.close()

os.rename("search-by-tag.html~","search-by-tag.html")

##
##
##
## Now we need to make the JS file
##
##
##

template_f = open("tag-buttons-template.js","r")
script_template = template_f.read()
template_f.close()

groups = cats+diets+cuisines+misc
groups_dict = {group:[] for group in groups}

for filename in os.listdir("recipes_txt"):

    if filename.endswith(".txt"):
        
        f = open("recipes_txt/"+filename,"r")
        name = f.readline().strip()

        [f.readline() for i in range(3)] # we don't need the desc

        groups = read_til_empty_line(f)
        for group in groups:
            groups_dict[group] += [name]

js_dict_str = "'{group}':[{names}]"
name_strs = {g:",".join(["'"+n+"'" for n in groups_dict[g]]) for g in groups_dict.keys()}
group_strs = [js_dict_str.format(group = g,names = name_strs[g]) for g in groups_dict.keys()]
js_dict = ",\n".join(group_strs)
script = script_template % js_dict # formatting with {} is hard with js code

temp_file = open("tag-buttons.js~","w+")
temp_file.write(script)
temp_file.close()

os.rename("tag-buttons.js~","tag-buttons.js")
