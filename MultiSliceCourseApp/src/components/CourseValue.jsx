import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, courses: { data, searchTerm } }) => {
    //destructoring yapiyoruz
    // const filteredCourses = data.filter((course) =>
    //   course.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // let cost = 0;
    // for (let course of filteredCourses) {
    //   cost += course.cost;
    // }
    // return cost;
    //bu kısım doğru fakat daha güzel bir kullanim yapılabilir
    ///////////////////////////////////// alttaki de alternatif bir kullanımdır
    return data
      .filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, course) => acc + course.cost, 0);
  });

  return <div className="coursePrice">Toplam Tutar: {totalCost} TL</div>;
}

export default CourseValue;
