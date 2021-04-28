import React, { useRef, useState } from 'react'

export const UploadContentScreen = () => {

    const fileRef = useRef(null);
    const [file, setFile] = useState({});

    const onSelectedFile = () => {
        // console.log(e.target.files[0]);
        console.log(fileRef.current.files[0]);
        setFile(fileRef.current.files[0]);

    }

    return (
        <div className="upload-screen">
            <h1 className="upload-screen__title">Upload a picture</h1>
            <input className="upload-screen__custom-file" type="file" accept="image/*" ref={fileRef} onChange={onSelectedFile}/>
            {
                (file) &&
                (
                    <span>{file.name}</span>
                )
            }
            <progress className="upload-screen__bar" value="0" max="100"/>
        </div>
    )
}
