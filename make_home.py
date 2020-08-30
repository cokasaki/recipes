# Load our set of recipes from text
# and turn them into html menus
import os

def read_and_close(filename):
    f = open(filename,"r")
    txt = f.read()
    f.close()
    return txt

def read_to_list(filename):
    f = open(filename,"r")
    line = f.readline()
    lines = []
    while line != "":
        lines += [line.strip()]
        line = f.readline()
    return lines

index_template = read_and_close("index-template.txt")

cats = read_to_list("categories.txt")
diets = read_to_list("diets.txt")
cuisines = read_to_list("cuisines.txt")
misc = read_to_list("misc.txt")

list_item_str = "<li><a href='groups/{i}.html'>{i}</a></li>"
categories = "\n".join([list_item_str.format(i=cat) for cat in cats])
diet_restrs = "\n".join([list_item_str.format(i=diet) for diet in diets])
cuisines = "\n".join([list_item_str.format(i=cuis) for cuis in cuisines])
miscs = "\n".join([list_item_str.format(i=misc) for misc in misc])

index_html = index_template.format(cats=categories,diets=diet_restrs, \
                                   cuisines=cuisines,misc=miscs)
temp_file = open("index.html~","w+")
temp_file.write(index_html)
temp_file.close()
os.rename("index.html~","index.html")
