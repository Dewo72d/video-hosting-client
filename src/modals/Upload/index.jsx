import React, {useContext, useEffect, useState} from "react";

//Styles
import styles from "./App.scss";

//Components
import Button from "../../Containers/Button";
import Input from "../../Containers/Input";

//Redux
import {useDispatch} from "react-redux";
import {modalSlice} from "../../utils/store/reducers/changeModal";

//Icons
import {ReactComponent as Close} from "../../assets/icons/close.svg";

//Utils
import {request} from "../../utils/utils";

export default function Upload({}) {

    const dispatch = useDispatch();
    const {off} = modalSlice.actions;

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);


    const send = async () => {
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                console.log("FILE >> ", file)
                const res = await request({
                    method: "POST",
                    path: `videos/video/upload`,
                    data: {
                        name: name,
                        desc: desc,
                        file: file
                    },
                    headers: {"Content-Type": "multipart/form-data",}
                });
                window.location.reload();
                console.log("RES >>> ", res)
            } catch (error) {
                alert("ERROR")
                console.error("AAAAAA >>>.",error);
            }

        }
    }

    const handleFileUpload = (e) => {
        const file = e?.target?.files?.[0];
        if (file) {
            setFile(file);
        }
    };

    return (
        <div className={styles.App}>
            <Close className={styles.close} onClick={() => dispatch(off())}/>

            <Input value={name} onChange={e => setName(e.target.value)} placeholder={'Video name'}/>
            <Input value={desc} onChange={e => setDesc(e.target.value)} placeholder={'Description'}/>
            <input type="file" onChange={handleFileUpload} className={styles.upload}/>

            <Button text={'Upload video'} type={'submit'} cb={send}/>
        </div>
    )
}