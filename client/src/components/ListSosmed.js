import { useHistory } from 'react-router-dom'
import { deleteSosialMedia } from '../store/actionCreators'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert';
import moment from 'moment'

export default function ListSosmed({aplikasi}) {
    const history = useHistory()
    const dispatch = useDispatch()

    function deleteData() {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteSosialMedia(aplikasi.id))
                swal("Your data has been deleted!", {
                icon: "success",
              });
            }
        });
    }

    return (
        <tr>
            <td>{aplikasi.nama_aplikasi}</td>
            <td>{aplikasi.keterangan}</td>
            <td>{aplikasi.jumlah_pengguna}</td>
            <td>{aplikasi.pendiri}</td>
            <td>{moment(aplikasi.tanggal_didirikan).format('ll')}</td>
            <td>
                <button className="btn btn-primary" onClick={() => history.push(`/edit/${aplikasi.id}`)}>Edit</button> 
                <button className="btn btn-primary" onClick={() => {deleteData()}}>Hapus</button>
            </td>
        </tr>
    )
}