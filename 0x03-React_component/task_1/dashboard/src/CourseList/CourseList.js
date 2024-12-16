import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

export default function CourseList({ listCourses }) {
    return (
        < table id="CourseList" >
            <thead>
                <CourseListRow
                    isHeader={true}
                    textFirstCell="Available courses"
                />
                <CourseListRow
                    isHeader={true}
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                />
            </thead>
            < tbody >
                {listCourses.length >= 1
                    ? listCourses.map((elem) => {
                        return <CourseListRow
                            key={elem.id}
                            isHeader={false}
                            textFirstCell={elem.name}
                            textSecondCell={elem.credit}
                        />
                    })
                    : <CourseListRow
                        isHeader={false}
                        textFirstCell={"No course available yet"}
                    />
                }
            </tbody>
        </table >
    )
}


CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
    listCourses: []
}