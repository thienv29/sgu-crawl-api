import request from "request";
import jsdom from "jsdom";
const getdiem= (mssv)=>{
    request(
        `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
        function (error, response, body) {
            if (!error) {
                const dom = new jsdom.JSDOM(body);
                let listElement = Array.from(
                    dom.window.document.querySelectorAll(".row-diemTK")
                );
                listElement = listElement.slice(
                    listElement.length - 6,
                    listElement.length - 4
                );
                let diemso={
                    mssv:`${mssv}`,
                    diemhe10:'',
                    diemhe3:''
                }
                
                diemso.diemhe10 = listElement[0].querySelector(".Label:nth-child(2)").textContent;
                diemso.diemhe3 = listElement[1].querySelector(".Label:nth-child(2)").textContent;
                return(diemso)
            } else {
                return(error);
            }
        }
    );
}
const diemCTR = {
    
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        let diem = getdiem(mssv)
        res.send(diem)
        
    },
    
    getDiemListSv(req, res, next) {
        getDiemSv()
    },
};
export default diemCTR;
