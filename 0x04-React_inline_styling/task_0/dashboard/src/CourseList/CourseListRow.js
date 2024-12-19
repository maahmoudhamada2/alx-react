import PropTypes from 'prop-types';

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
}

const rowHeaderStyle = {
    backgroundColor: '#deb5b545'
}

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const headerCells = <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
    </>
    const dataCell = <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
    </>
    return (<tr style={isHeader ? rowHeaderStyle : rowStyle}>
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