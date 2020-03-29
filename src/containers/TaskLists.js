import { connect } from 'react-redux';
import TaskLists from '../components/TaskLists'
import { setSelectedList } from '../actions/tasklists'

const mapStateToProps = (state)=>{
    return {
        lists: state.tasklists.lists,
        selectedListId: state.tasklists.selectedList.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedList : (selectedList) => dispatch(setSelectedList(selectedList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskLists)