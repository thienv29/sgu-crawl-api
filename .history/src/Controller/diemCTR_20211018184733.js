
import requestSgu from "./callBack.js";
const diemCTR = {
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        console.log(requestSgu.requestDiem(mssv));
        res.send(requestSgu.requestDiem(mssv))
    },
    getDiemListSv(req, res, next) {
        
    },
};
export default diemCTR;
