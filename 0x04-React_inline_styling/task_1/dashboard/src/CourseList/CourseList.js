import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    table: {
        width: "100%",
        border: '1px solid #dfdbdb',
        textAlign: 'left'
    },
    
    tableHeader: {
        padding: '0.5rem 0',
        borderBottom: '2px solid #dfdbdb'
    },

    tableHeaderSpan: {
        textAlign: 'center',

    }

})

export default function CourseList({ listCourses }) {
    return (
        < table id="CourseList" className={css(styles.table)}>
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