import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useSelector} from 'react-redux'

export default function EditDocument() {
    const document = useSelector(state => state.document)
    return(
        <div className="row">
            <h3>Edit Sebagai Dokumen</h3>
            <div className="col">
                <CKEditor
                    editor={ ClassicEditor }
                    data={document}
                />
            </div>
        </div>
    )
}