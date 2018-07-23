import { FETCH_COURSES } from './types'

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Problem Solving",
                description: "In this course you'll learn how ot work with the efficient Redis database to manage key / balue realtionships."
            },
            {
                title: "HTML/SCC Bootcamp",
                description: "Learn HTML5 and CSS 3 from scrathc, starting with the basics and finishing by building five projects from scratch."
            },
            {
                title: "UX for Developers",
                description: "this User Experience (UX) course examines how to develop a system for approaching application developement and enhancing the experience for users."
            }
        ]
    }
}