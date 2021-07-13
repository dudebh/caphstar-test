import { addSosialMedia } from '../store/actionCreators'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Swal from 'sweetalert';


export default function AddPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [inputForm, setInputForm] = useState({
        nama_aplikasi: '',
        keterangan: '',
        jumlah_pengguna: 0,
        pendiri: '',
        tanggal_didirikan: ''
    });

    function saveAplikasi(e) {
        e.preventDefault()
        console.log(inputForm);
        dispatch(addSosialMedia(inputForm))
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
            <h3>Tambah Aplikasi</h3>
            <div className="col">
                <form onSubmit={(e) => {saveAplikasi(e)}}>
                    <div className="mb-3">
                        <label htmlFor="nama_aplikasi" className="form-label">Nama Aplikasi</label>
                        <input type="text" className="form-control" id="nama_aplikasi" onChange={(e) => setInputForm({...inputForm, nama_aplikasi: e.target.value})} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="keterangan" className="form-label">Keterangan</label>
                        <input type="text" className="form-control" id="keterangan" onChange={(e) => setInputForm({...inputForm, keterangan: e.target.value})} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jumlah_pengguna" className="form-label">Jumlah Pengguna</label>
                        <input type="number" className="form-control" id="jumlah_pengguna" onChange={(e) => setInputForm({...inputForm, jumlah_pengguna: e.target.value})} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pendiri" className="form-label">Pendiri</label>
                        <input type="text" className="form-control" id="pendiri" onChange={(e) => setInputForm({...inputForm, pendiri: e.target.value})} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tanggal_didirikan" className="form-label">Tanggal Didirikan</label>
                        <input type="date" className="form-control" id="tanggal_didirikan" onChange={(e) => setInputForm({...inputForm, tanggal_didirikan: e.target.value})} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}
