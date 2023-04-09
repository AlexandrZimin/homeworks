# 1
import re


def find_keys(line):
    employees_keys_list = re.findall(r'\t(\w+)', line)
    return employees_keys_list


def find_values(line):
    employees_values_list = re.findall(r':\s(\w+)', line)
    return employees_values_list


lines = ''
employees = {}
file_name = input('Введите имя файла: ')
# f = open(f'{file_name}', 'w', encoding="UTF-8")
# f.write('Зимин:\n\tphone: 123\n\tage: 22\nИванов:\n\tphone: 123\n\tage: 22')
f = open(f'{file_name}', 'r', encoding="UTF-8")
for line in f:
    lines += line
employees_list = re.findall(r'^\w+', lines) + re.findall(r'\n(\w+)', lines)
employees_data_str = re.split(r'\w+:\n', lines)
employees_data_str.pop(0)
for i in range(len(employees_list)):
    employees[employees_list[i]] = {}
for i in range(len(employees_list)):
    for j in range(len(find_values(employees_data_str[i]))):
        employees[employees_list[i]].update({find_keys(employees_data_str[i])[j]: find_values(employees_data_str[i])[j]})
print(employees)
while True:
    action = input('1 - добавить, 2 - удалить, 3 - Найти по возрасту, 4 - Найти по имени, 5 - Заменить, 6 - Сохранить\n')
    if action == '1':
        bio = input('Введите ФИО сотрудника: ')
        employees[bio] = {}
        while True:
            info = input('1. Телефон\n2. Возраст\n')
            if info == '1':
                key = 'phone'
                phone = input('Введите номер телефона: ')
                employees[bio].update({key: phone})
            elif info == '2':
                key = 'age'
                age = input('Введите возраст: ')
                employees[bio].update({key: age})
            else:
                print(employees)
                break
    elif action == '2':
        bio = input('Введите ФИО сотрудника: ')
        del employees[bio]
        print(employees)
    elif action == '3':
        age = input('Введите возраст: ')
        employees_copy = {}
        for keys1, values1 in employees.items():
            for keys2, values2 in values1.items():
                if values2 == age:
                    employees_copy[keys1] = values1
        print(employees_copy)
        save = input('Сохранить(да, нет)? ')
        if save == 'да':
            file_name = input('Введите имя файла: ')
            f1 = open(f'{file_name}', 'w', encoding="UTF-8")
            for keys1, values1 in employees_copy.items():
                f1.write(keys1 + ':\n')
                for keys2, values2 in values1.items():
                    f1.write(f'\t{keys2}: {values2}\n')
            f1.close()
    elif action == '4':
        bio = input('Введите ФИО сотрудника: ')
        employees_copy = {}
        for key, value in employees.items():
            if bio in key:
                employees_copy[key] = value
        print(employees_copy)
        save = input('Сохранить(да, нет)? ')
        if save == 'да':
            file_name = input('Введите имя файла: ')
            f1 = open(f'{file_name}', 'w', encoding="UTF-8")
            for keys1, values1 in employees_copy.items():
                f1.write(keys1 + ':\n')
                for keys2, values2 in values1.items():
                    f1.write(f'\t{keys2}: {values2}\n')
            f1.close()
    elif action == '5':
        bio = input('Введите ФИО сотрудника: ')
        employees[bio] = {}
        while True:
            info = input('1. Телефон\n2. Возраст\n')
            if info == '1':
                key = 'phone'
                phone = input('Введите номер телефона: ')
                employees[bio].update({key: phone})
            elif info == '2':
                key = 'age'
                age = input('Введите возраст: ')
                employees[bio].update({key: age})
            else:
                print(employees)
                break
    elif action == '6':
        f = open('employees.txt', 'w', encoding="UTF-8")
        for keys1, values1 in employees.items():
            f.write(keys1 + ':\n')
            for keys2, values2 in values1.items():
                f.write(f'\t{keys2}: {values2}\n')
    else:
        f = open('employees.txt', 'w', encoding="UTF-8")
        for keys1, values1 in employees.items():
            f.write(keys1 + ':\n')
            for keys2, values2 in values1.items():
                f.write(f'\t{keys2}: {values2}\n')
        f.close()
        break


