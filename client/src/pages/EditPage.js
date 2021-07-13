import { editSosialMedia, fetchSosialMediaById } from '../store/actionCreators'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Swal from 'sweetalert';


export default function EditPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const aplikasi = useSelector(state => state.sosialMediaById)
    let { id } = useParams();

    useEffect(() => {
        dispatch(fetchSosialMediaById(id))
        // eslint-disable-next-line
    },[])

    let tanggal_didirikan
    if(aplikasi && aplikasi.tanggal_didirikan){
        tanggal_didirikan = aplikasi.tanggal_didirikan.substring(0, 10)
    }

    function editAplikasi(e) {
        e.preventDefault()
        const payload = {
            nama_aplikasi: e.target.nama_aplikasi.value,
            keterangan: e.target.keterangan.value,
            jumlah_pengguna: e.target.jumlah_pengguna.value,
            pendiri: e.target.pendiri.value,
            tanggal_didirikan: e.target.tanggal_didirikan.value
        }
        dispatch(editSosialMedia(id, payload))
        .then(({data}) => {
            Swal({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            })
            history.push('/')
        })
        .catch(err => {
            Swal({
                icon: 'error',
                title: err.response.data.message,
            })
        })
        
    }
    return (
        <div className="row">
            <h3>Edit Aplikasi</h3>
            <div className="col">
                <form onSubmit={(e) => {editAplikasi(e)}}>
                    <div className="mb-3">
                        <label htmlFor="nama_aplikasi" className="form-label">Nama Aplikasi</label>
                        <input type="text" name="nama_aplikasi" defaultValue={aplikasi.nama_aplikasi} className="form-control" id="nama_aplikasi" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="keterangan" className="form-label">Keterangan</label>
                        <input type="text" name="keterangan" defaultValue={aplikasi.keterangan} className="form-control" id="keterangan" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jumlah_pengguna" className="form-label">Jumlah Pengguna</label>
                        <input type="number" name="jumlah_pengguna" defaultValue={aplikasi.jumlah_pengguna} className="form-control" id="jumlah_pengguna" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pendiri" className="form-label">Pendiri</label>
                        <input type="text" name="pendiri" defaultValue={aplikasi.pendiri} className="form-control" id="pendiri" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tanggal_didirikan" className="form-label">Tanggal Didirikan</label>
                        <input type="date" name="tanggal_didirikan" defaultValue={tanggal_didirikan} className="form-control" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>

        </div>
    )
}
