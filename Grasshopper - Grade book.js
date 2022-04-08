function getGrade (s1, s2, s3) {
  // Code here
  const avg = (s1 + s2 + s3) / 3
  if(90 <= avg && avg <= 100) return "A"
  else if(80 <= avg && avg < 90) return "B"
  else if(70 <= avg && avg < 80) return "C"
  else if(60 <= avg && avg < 70) return "D"
  else if(0 <= avg && avg < 60) return "F"
}
