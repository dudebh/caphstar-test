
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSosialMedia, setDocument} from '../store/actionCreators'
import ListSosmed from '../components/ListSosmed'
import ListSosmedPrint from '../components/ListSosmedPrint'

export default function Home () {
    const history = useHistory()
    const dispatch = useDispatch()
    const sosialMedia = useSelector(state => state.sosialMedia)
    
    useEffect(() => {
        dispatch(fetchSosialMedia())
        // eslint-disable-next-line
    },[])


    function printDiv(divName) {
        let printContents = document.getElementById(divName).outerHTML;
        dispatch(setDocument(printContents))
        history.push('/edit_document')
      }

    return (
        <>
            <div className="row">
                <div className="col"><button className="btn btn-success" onClick={() => history.push('/add')}>Tambah Aplikasi</button></div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nama Aplikasi</th>
                                <th>Keterangan</th>
                                <th>Jumlah Pengguna</th>
                                <th>Pendiri</th>
                                <th>Tanggal Didirikan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sosialMedia.map(aplikasi => {
                                    return <ListSosmed aplikasi={aplikasi} key={aplikasi.id}/>
                                })
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={() => printDiv("print-area")}>View as Document</button>
                </div>
                
                <div className="col" style={{display: 'none'}} id="print-area">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nama Aplikasi</th>
                                <th>Keterangan</th>
                                <th>Jumlah Pengguna</th>
                                <th>Pendiri</th>
                                <th>Tanggal Didirikan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sosialMedia.map(aplikasi => {
                                    return <ListSosmedPrint aplikasi={aplikasi} key={aplikasi.id}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}