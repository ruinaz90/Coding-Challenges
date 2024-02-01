# 1.  Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4].

def intersect(array1, array2):
    array3 = []
    hash_table = {}
    
    for i in array1:
        hash_table[i] = True
        
    for i in array2:
        if i in hash_table:
            array3.append(i)
    
    return array3

arr1 = [1, 2, 3, 4, 5]
arr2 = [0, 2, 4, 6, 8]
print(intersect(arr1, arr2))


# 2. Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array.