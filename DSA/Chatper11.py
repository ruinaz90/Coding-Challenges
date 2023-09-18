# 11-1
def count_chars(array):
    if len(array) == 1:
        return len(array[0])
    return len(array[0]) + count_chars(array[1:])
array_strings = ["ab", "c", "def", "ghij"]
print(count_chars(array_strings))