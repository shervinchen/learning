import { observable, action } from "mobx";
import { Uploader } from "../models";
import { message } from "antd"

class ImageStore {
  @observable filename = "";
  @observable file = null;
  @observable isUploading = false;
  @observable serverFile = null;

  @action setFilename(newFilename) {
    this.filename = newFilename;
  }

  @action setFile(newFile) {
    this.file = newFile;
  }

  @action upload() {
    this.isUploading = true;
    this.serverFile = null;
    return new Promise((resolve, reject) => {
      Uploader.add(this.file, this.filename)
        .then((serverFile) => {
            this.serverFile = serverFile
          resolve(serverFile);
        })
        .catch((err) => {
          console.error("上传失败");
          message.error("上传失败");
          reject(err);
        })
        .finally(() => {
          this.isUploading = false;
        });
    });
  }

  @action reset() {
    this.isUploading = false
    this.serverFile = null
  }
}

export default new ImageStore();
