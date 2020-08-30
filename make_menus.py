# Load our set of recipes from text
# and turn them into html menus
import os

template_f = open("menu-template.txt","r")
menu_template = template_f.read()
template_f.close()

def read_til_empty_line(file):
    line = file.readline()
    lines = []
    while line != "\n" and line != "":
        lines += [line.strip()]
        line = file.readline()
    return lines

cats_dict = {}
for filename in os.listdir("recipes_txt"):

    if filename.endswith(".txt"):
        
        recipe_f = open("recipes_txt/"+filename,"r")

        title = recipe_f.readline().strip()
        recipe_f.readline()

        desc = recipe_f.readline().strip()
        recipe_f.readline()

        cats = read_til_empty_line(recipe_f)

        for cat in cats:
            if cat in cats_dict.keys():
                cats_dict[cat] += [title]
            else:
                cats_dict[cat] = [title]
            
    else:
        continue

for cat in cats_dict.keys():

    list_item_str = "<li><a href='../recipes/{r}.html'>{r}</a></li>"
    recipes_str = "\n".join([list_item_str.format(r=r) for r in cats_dict[cat]])
    menu_html = menu_template.format(title=cat,desc=cat,recipes=recipes_str)

    html_file_str = "groups/{c}.html".format(c=cat)
    temp_file = open(html_file_str+"~","w+")
    temp_file.write(menu_html)
    temp_file.close()

    os.rename(html_file_str+"~",html_file_str)
