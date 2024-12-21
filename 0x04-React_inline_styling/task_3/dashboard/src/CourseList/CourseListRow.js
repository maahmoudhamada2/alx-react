import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



const styles = StyleSheet.create({
    default: {
        height: '30px'
    },
    defaultRow: {
        backgroundColor: '#f5f5f5ab'
    },

    rowHeader: {
        backgroundColor: '#deb5b545'
    },

    rowHeaderSpan: {
        textAlign: 'center'
    }
}
)

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const headerCells = <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
    </>

    const dataCell = <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </>

    const classname = css(
        styles.default,
        isHeader ? styles.rowHeader : styles.defaultRow,
        isHeader && !textSecondCell ? styles.rowHeaderSpan : null
    )

    return (<tr className={classname}>
        {
            isHeader
                ? (textSecondCell ? headerCells : <th colSpan="2">{textFirstCell}</th>)
                : dataCell
        }
    </tr>)
}

CourseListRow.popTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};