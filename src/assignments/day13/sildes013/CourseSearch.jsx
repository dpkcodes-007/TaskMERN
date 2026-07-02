import React, { useState } from 'react'

const CourseSearch = () => {
    const [course,setCourse] = useState('')
    const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "React" },
  { id: 6, name: "React Native" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "Node.js" },
  { id: 9, name: "Express.js" },
  { id: 10, name: "MongoDB" },
  { id: 11, name: "MySQL" },
  { id: 12, name: "Python" },
  { id: 13, name: "Java" },
  { id: 14, name: "C Programming" },
  { id: 15, name: "C++" },
  { id: 16, name: "Data Structures" },
  { id: 17, name: "Algorithms" },
  { id: 18, name: "Git & GitHub" },
  { id: 19, name: "AWS" },
  { id: 20, name: "Docker" },
];

const filterCourse = courses.filter((e)=>e.name.toLowerCase().includes(course.toLowerCase()))
const handlecourse = (e)=>{
   setCourse(e.target.value)
}
  return (
    <>
    <div>
        <input type="text" placeholder='Search ur Course' value={course} onChange={handlecourse}/>
        {filterCourse.map((e)=>(
            <p key={e.id}>{e.name}</p>
        ))}
    </div>
    </>
  )
}

export default CourseSearch