import Upload from "antd/es/upload";
import PrUpload from "./antd-pr/es/upload";
import "antd/dist/antd.css";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { useState } from "react";

const originFileList: UploadFile[] = [
  {
    uid: "-1",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-3",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-4",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];

function App() {
  const [fileList, setFileList] = useState(originFileList);

  const onChange = ({ fileList: newFileList }: UploadChangeParam) => {
    setFileList(newFileList);
  };

  return (
    <>
      <div>try to delete any one image</div>
      <button
        onClick={() => setFileList(originFileList)}
        disabled={fileList.length >= 4}
      >
        Reset
      </button>
      <div style={{ display: "flex" }}>
        <span>pr before</span>
        <div style={{ width: 448 }}>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
          >
            {fileList.length < 4 && "+ Upload"}
          </Upload>
        </div>
        <span>pr after</span>
        <div style={{ width: 448 }}>
          <PrUpload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
          >
            {fileList.length < 4 && "+ Upload"}
          </PrUpload>
        </div>
      </div>
    </>
  );
}

export default App;
