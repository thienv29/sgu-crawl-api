import request from "request";
import jsdom from "jsdom";
const diemCTR = {
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                   
                    const dom = new jsdom.JSDOM(body);
                    let listElement = Array.from(dom.window.document.querySelectorAll(".row-diemTK"))
                    listElement = listElement.slice(listElement.length - 6, listElement.length - )
                    listElement.forEach((e) => {
                        console.log(e.querySelector('.Label:nth-child(2)').textContent);
                    })
                    res.send(body);
                } else {
                    console.log(error);
                }
            }
        );
    },
    getDiemListSv(req, res, next) {},
};
export default diemCTR;
