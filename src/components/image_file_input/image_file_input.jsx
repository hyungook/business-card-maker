import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {

    console.log(event.target.files);
    const {target:{files},} = event;
    const theFile = files[0];
    // console.log(theFile);
    // 2. 여기서 결과를 받는다.
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      console.log(finishedEvent);
    }
    
    // 1. 파일을 읽고
    reader.readAsDataURL(theFile);

    // setLoading(true);
    // const uploaded = await imageUploader.upload(event.target.files[0]);
    // setLoading(false);
    // onFileChange({
    //   name: uploaded.original_filename,
    //   url: uploaded.url,
    // });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
