import React from 'react';
import Link from 'next/link';

// fetch courses

const fetchCourses = async () => {
    const response = await fetch('http://localhost:3000/api/courses');
    const courses = await response.json();
    return courses;
}


const Courses = async () => {
    const courses = await fetchCourses();
    // console.log(courses);

  return (
    <div className='courses'>
        {courses.map((course) => (
            <div className='card' key={course.id}>
                <h2>{course.title}</h2>
                <small>Level: {course.level}</small>
                <p>{course.description}</p>
                <Link href={course.link} className='btn' target='_blank'>
                    Go to Course
                </Link>                
            </div>
        ))}
    </div>
  )
}

export default Courses