import React, { useRef, useState } from 'react'
import { firebase } from "../firebase/firebase-config";

export const UploadContentScreen = () => {

    const [isFileSelected, setIsFileSelected] = useState(false);
    const fileRef = useRef(null);
    const picRef = useRef(null);
    const progressBar = useRef(null);
    
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

    const uploadFile = () => {
        // CONTINUE WITH THE UPLOADING AND WRITING THE FILE IN THE DATABASE
        const storageRef = firebase.storage().ref('gallery/' + fileRef.current.files[0].name);
        const progress = storageRef.put(fileRef.current.files[0]);

        progress.on('state_changed',(snapshot)=>{
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            progressBar.current.value = percentage;
        })

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
                        <button className="upload-screen__upload" onClick={uploadFile}>upload</button>
                        <progress ref={progressBar} className="upload-screen__bar" value="0" max="100"/>
                    </>
                )
            }
        </div>
    )
}
