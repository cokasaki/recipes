# Load our set of recipes from text
# and turn them into html menus
import os

template_f = open("recipe-template.txt","r")
recipe_template = template_f.read()
template_f.close()

def read_til_empty_line(file):
    line = file.readline()
    lines = []
    while line != "\n" and line != "":
        lines += [line.strip()]
        line = file.readline()
    return lines

for filename in os.listdir("recipes_txt"):

    if filename.endswith(".txt"):
        
        recipe_f = open("recipes_txt/"+filename,"r")

        title = recipe_f.readline().strip()
        recipe_f.readline()

        desc = recipe_f.readline().strip()
        recipe_f.readline()

        cats = read_til_empty_line(recipe_f)
        ingr = read_til_empty_line(recipe_f)
        inst = read_til_empty_line(recipe_f)

        ingr_str = "\n".join(["<li>{i}</li>".format(i=i) for i in ingr])
        inst_str = "\n".join(["<li>{i}</li>".format(i=i) for i in inst])

        recipe_html = recipe_template.format(title=title,desc=desc, \
                                             ingr=ingr_str,inst=inst_str)

        html_file_str = "recipes/{t}.html".format(t=title)
        temp_file = open(html_file_str+"~","w+")
        temp_file.write(recipe_html)
        temp_file.close()

        os.rename(html_file_str+"~",html_file_str)
 
            
    else:
        continue


def __init__():
    pass
