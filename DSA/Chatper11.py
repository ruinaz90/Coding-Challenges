'''11-1
Use recursion to write a function that accepts an array of strings and returns the total number of characters across all the strings. For example, if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there are 10 characters in total.'''
def count_chars(array):
    if len(array) == 1:
        return len(array[0])
    return len(array[0]) + count_chars(array[1:])

array_strings = ["ab", "c", "def", "ghij"]
print(count_chars(array_strings))

''' 11-2
Use recursion to write a function that accepts an array of numbers and
returns a new array containing just the even numbers. '''
def even_nums(array):
    if len(array) == 0:
        return []
    if array[0] % 2 == 0:
        return [array[0]] + even_nums(array[1:])
    else:
        return even_nums(array[1:])

array_nums = [1, 2, 3, 4, 5, 6]
print(even_nums(array_nums))