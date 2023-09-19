'''11-1
Use recursion to write a function that accepts an array of strings and returns the total number of characters across all the strings. For example, if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there are 10 characters in total.'''
def count_chars(array):
    if len(array) == 1:
        return len(array[0])
    return len(array[0]) + count_chars(array[1:])
array_strings = ["ab", "c", "def", "ghij"]
print(count_chars(array_strings))