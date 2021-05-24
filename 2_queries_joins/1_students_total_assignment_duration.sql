SELECT SUM(duration) as total_duration 
  from assignment_submissions
  JOIN students ON (student_id = students.id)
  WHERE name = 'Ibrahim Schimmel';