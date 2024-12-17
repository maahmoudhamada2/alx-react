import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const headerCells = <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
    </tr>
    const dataCell = <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </tr>

    return isHeader
        ? (textSecondCell
            ? headerCells
            : <tr><th colSpan="2">{textFirstCell}</th></tr>)
        : dataCell
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