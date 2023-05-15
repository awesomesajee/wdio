import fs from 'fs'
class Utilities {

    readFilesFromFolder(filename, callback) {
        let isFileDownloaded = false;
        fs.readdir(global.downloadDir, (err, files) => {
            files.forEach(file => {
                console.log(file)
                console.log(filename)
                if (file === filename) {
                    console.log("testtest")
                    isFileDownloaded = true;
                }
            });
            callback(isFileDownloaded)
        });
        
    }

}

export default new Utilities();