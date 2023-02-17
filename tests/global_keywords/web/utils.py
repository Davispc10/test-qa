# -*- coding: utf-8 -*-

import json
import os
import random
import string
from collections import namedtuple

import yaml
from robot.libraries.BuiltIn import BuiltIn

def get_project_root():
    return os.path.dirname(os.path.abspath("requirements.txt"))

def load_page_atributes(page):
    # tenta carregar da pasta local
    print("--------")

    file_name = "{}.yaml".format(page)

    test_path = get_project_root()
    local_page = "{}\\tests/end-to-end/global_pages/{}".format(test_path, file_name)
    print(local_page)
    try:
        print("Tentando carregar page object local: {}".format(local_page))
        with open(local_page) as file:
            return yaml.load(file, Loader=yaml.FullLoader)
    except Exception:
        print("Não conseguiu carregar página local, tentando carregar página global")

    # senao carrega da global
    base_path = get_project_root()
    global_page = "{}\\tests/end-to-end/global_pages/{}".format(base_path, file_name)
    print("Tentando carregar page object global: {}".format(global_page))
    with open(global_page) as file:
        return yaml.load(file, Loader=yaml.FullLoader)

def select_os(yaml_page):
    os = BuiltIn().get_variable_value("${G_OS}")
    os = os.lower()
    print("os: ")
    print(os)
    page = {}
    for key in yaml_page.keys():
        print("key: ")
        print(key)
        if yaml_page[key][os]["selector"] == "text":
            page[key] = yaml_page[key][os]["value"]
        else:
            if yaml_page[key][os]["selector"] and yaml_page[key][os]["value"]:
                page[key] = yaml_page[key][os]["selector"] + yaml_page[key][os]["value"]
            else:
                page[key] = "Seletor vazio, por favor indique valor de seletor na page object"

    return page

def get_page_atributes(page):
    yaml_page = load_page_atributes(page)
    page_current_device = json.dumps(select_os(yaml_page))

    try:
        page_object = json.loads(
            page_current_device, object_hook=lambda d: namedtuple("X", d.keys())(*d.values())
        )
        return page_object
    except Exception:
        print("An exception occurred trying to convert json to object")

def random_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))