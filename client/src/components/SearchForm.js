import { useDispatch } from 'react-redux'
import { searchSosialMedia, fetchSosialMedia } from '../store/actionCreators'

export default function SearchForm(){
    const dispatch = useDispatch()
    function search(e){
        e.preventDefault()
        const keyword = e.target.keyword.value
        if(keyword){
            dispatch(searchSosialMedia(keyword))
        }else{
            dispatch(fetchSosialMedia())
        }
    }
    return (
        <form onSubmit={(e) => {search(e)}} className="row align-items-center">
            <div className="col-auto">
                <input type="text" placeholder="Cari Berdasarkan Pendiri" name="keyword" className="form-control"/>
            </div>    
            <div className="col-auto">
                <button className="btn btn-primary">Search</button>
            </div>
        </form>
    )
}