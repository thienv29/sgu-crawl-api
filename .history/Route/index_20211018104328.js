import tkbCTR from "../Controller/tkbCTR";
import diemCTR from "../Controller/diemCTR";
function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', diemRoute);

    
}
module.exports = route;