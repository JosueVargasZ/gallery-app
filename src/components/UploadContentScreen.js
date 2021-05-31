import React, { useRef, useState } from 'react'

export const UploadContentScreen = () => {

    const [isFileSelected, setIsFileSelected] = useState(false);
    const fileRef = useRef(null);
    const picRef = useRef(null);
    
    const onSelectedFile = () => {
        
        const imageReader = new FileReader();
        
        imageReader.onloadend = ()=> {
            picRef.current.src = imageReader.result;
        }
        
        if(fileRef.current.files[0]){
            imageReader.readAsDataURL(fileRef.current.files[0]);
            setIsFileSelected(true);
        }else {
            setIsFileSelected(false);
        }

    }

    return (
        <div className="upload-screen">
            <h1 className="upload-screen__title">Upload a picture</h1>
            <input className="upload-screen__custom-file" type="file" accept="image/*" ref={fileRef} onChange={onSelectedFile}/>
            {
                (isFileSelected) &&
                (
                    <>
                        <img ref={picRef} src='' alt='' style={{width: '50%'}} />
                        <button className="upload-screen__upload">upload</button>
                    </>
                )
            }
            <progress className="upload-screen__bar" value="0" max="100"/>
        </div>
    )
}
