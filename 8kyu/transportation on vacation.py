def rental_car_cost(d):
    # your code
    total = 40 * d
    if d >= 7:
        total -= 50
    elif d >= 3:
        total -= 20
    return total
