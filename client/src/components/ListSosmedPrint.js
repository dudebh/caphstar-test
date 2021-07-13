
import moment from 'moment'
export default function ListSosmedPrint({aplikasi}) {

    return (
        <tr>
            <td>{aplikasi.nama_aplikasi}</td>
            <td>{aplikasi.keterangan}</td>
            <td>{aplikasi.jumlah_pengguna}</td>
            <td>{aplikasi.pendiri}</td>
            <td>{moment(aplikasi.tanggal_didirikan).format('ll')}</td>
        </tr>
    )
}