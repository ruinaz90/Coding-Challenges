def better_than_average(class_points, your_points):
    # Your code here
    avg_score = sum(class_points) / len(class_points)
    return your_points > avg_score
