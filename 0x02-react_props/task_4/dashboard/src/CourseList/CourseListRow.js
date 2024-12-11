import PropTypes from 'prop-types';
import propTypes from 'prop-types';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const headerRows = <tr>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
    </tr>
    const dataRows = <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </tr>
    return (isHeader
        ? (textSecondCell
            ? headerRows
            : <tr><th colSpan="2">{textFirstCell}</th></tr>)
        : dataRows
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
}

CourseListRow.defaultProp = {
    isHeader: false,
    textSecondCell: null
}