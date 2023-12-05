import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    //destructoring yapiyoruz
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let cost = 0;
    for (let course of filteredCourses) {
      cost += course.cost;
    }
    return cost;
  });

  return <div className="coursePrice">Toplam Tutar: {totalCost} TL</div>;
}

export default CourseValue;
