import React, { useRef, useState } from 'react'

export const UploadContentScreen = () => {

    const fileRef = useRef(null);
    const picRef = useRef(null);
    const [file, setFile] = useState({});
    const imageReader = new FileReader();

    const onSelectedFile = () => {
        
        // ===WORKING ON THIS READER FOR SHOWING THE PICTURE BEFORE LOADING IT===

        console.log(fileRef.current.files[0]);
        setFile(fileRef.current.files[0]);
        
        imageReader.onloadend = ()=> {
            picRef.current.src = imageReader.result;
        }
        
        if(fileRef.current){
            imageReader.readAsDataURL(fileRef.current.files[0]);
        } else {
            picRef.current.src = '';
        }

    }

    return (
        <div className="upload-screen">
            <h1 className="upload-screen__title">Upload a picture</h1>
            <input className="upload-screen__custom-file" type="file" accept="image/*" ref={fileRef} onChange={onSelectedFile}/>
            {
                (file) &&
                (
                    <>
                        <img ref={picRef} src='' alt='' style={{width: '50%'}} />
                        <span>{file.name}</span>
                    </>
                )
            }
            <progress className="upload-screen__bar" value="0" max="100"/>
        </div>
    )
}
