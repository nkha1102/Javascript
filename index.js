function add() {
    let tbody = $("#mid");
    let tr = $("<tr>");
    tbody.append(tr);
    tr.addClass(index);
    let tdHoTen = $("<td>");
    let tdNgaySinh = $("<td>");
    let tdDiemToan = $("<td>");
    let tdDiemLy = $("<td>");
    let tdDiemHoa = $("<td>");
    let tdDiemTrungBinh = $("<td>");
    let tdHocLuc = $("<td>");
    tr.append(tdHoTen);
    tr.append(tdNgaySinh);
    tr.append(tdDiemToan);
    tr.append(tdDiemLy);
    tr.append(tdDiemHoa);
    tr.append(tdDiemTrungBinh);
    tr.append(tdHocLuc);
    tdDiemToan.addClass("dToan" + index);
    tdDiemLy.addClass("dLy" + index);
    tdDiemHoa.addClass("dHoa" + index);
    tdDiemTrungBinh.addClass("dTb" + index);
    tdHocLuc.addClass("hl" + index);
    index = index + 1;
    let tenInput = $("#name");
    let ngaySinhInput = $("#DOB");
    let diemToanInput = $("#diemToan");
    let diemLyInput = $("#diemLy");
    let diemHoaInput = $("#diemHoa");
    tdHoTen.text(tenInput.val());
    tdNgaySinh.text(ngaySinhInput.val());
    tdDiemToan.text(diemToanInput.val());
    tdDiemLy.text(diemLyInput.val());
    tdDiemHoa.text(diemHoaInput.val());
    }
function average() {
    for (let i = 1; i < index; i++) {
        let toan = $(".dToan" + i);
        let ly = $(".dLy" + i);
        let hoa = $(".dHoa" + i);
        let tb = $(".dTb" + i);
        let diemTB = (toan.text() - (-ly.text()) - (-hoa.text())) / 3;
        tb.text(diemTB.toFixed(2));
    }
}
function hocLuc() {
    for (let i = 1; i < index; i++) {
        let tb = $(".dTb" + i);
        let hl = $(".hl" + i);
        if (tb.text() >= 8) {
            hl.text("Giỏi");
        } else if (tb.text() < 8 && tb.text() >= 5) {
            hl.text("Khá");
        } else if (tb.text() < 5 && tb.text() >= 3) {
            hl.text("Trung Bình");
        } else {
            hl.text("Yếu");
        }
    }
}