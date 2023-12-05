import React from "react";
//dataya ulasmak icin useselector
import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();

  //search inputunda filtreleme işlemi
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    //destructoring yapiyoruz
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      courses: filteredCourses,
    };
  });

  const renderedCourses = courses.map((course) => {
    return (
      <div key={course.id} className="panel">
        <h1>{course.name}</h1>
        <h1>{course.description}</h1>
        <h1>{course.cost} TL</h1>
        <button
          className="button is-danger"
          onClick={() => dispatch(removeCourse(course.id))}
        >
          Sil
        </button>
      </div>
      //bu normal yazim sekli fonksiyona da atayabiliriz ve alttaki gibi tek satırda yapabiliriz
    );
  });
  return (
    // <>
    //   {courses.map((course) => {
    //     return (
    //       <div key={course.id} className="panel">
    //         <h1>{course.name}</h1>
    //         <h1>{course.description}</h1>
    //         <h1>{course.cost}</h1>
    //         <button className="button is-danger">Sil</button>
    //       </div>
    //     );
    //   })}
    // </>
    //       //!bu normal yazim sekli fonksiyona da atayabiliriz ve alttaki gibi daha rahat da yapabiliriz
    <>
      <div className="courseList">{renderedCourses}</div>
    </>
  );
}

export default CourseList;
