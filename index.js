var index = 1;
function add() {
    var tbody = document.getElementById("mid");
    var tr = document.createElement("tr");
    tbody.append(tr);
    tr.id = index;
    var tdHoTen = document.createElement("td");
    var tdNgaySinh = document.createElement("td");
    var tdDiemToan = document.createElement("td");
    var tdDiemLy = document.createElement("td");
    var tdDiemHoa = document.createElement("td");
    var tdDiemTrungBinh = document.createElement("td");
    var tdHocLuc = document.createElement("td");
    tr.append(tdHoTen);
    tr.append(tdNgaySinh);
    tr.append(tdDiemToan);
    tr.append(tdDiemLy);
    tr.append(tdDiemHoa);
    tr.append(tdDiemTrungBinh);
    tr.append(tdHocLuc);
    tdDiemToan.id = "dToan"+index;
    tdDiemLy.id = "dLy"+index;
    tdDiemHoa.id = "dHoa"+index;
    tdDiemTrungBinh.id = "dTb"+index;
    tdHocLuc.id = "hl"+index;
    index = index + 1;
    var tenInput = document.getElementById("name");
    var ngaySinhInput = document.getElementById("DOB");
    var diemToanInput = document.getElementById("diemToan");
    var diemLyInput = document.getElementById("diemLy");
    var diemHoaInput = document.getElementById("diemHoa");
    tdHoTen.innerHTML = tenInput.value;
    tdNgaySinh.innerHTML = ngaySinhInput.value;
    tdDiemToan.innerHTML = diemToanInput.value;
    tdDiemLy.innerHTML = diemLyInput.value;
    tdDiemHoa.innerHTML = diemHoaInput.value;
}
function average() {
    for (let i = 1; i < index; i++) {
        let toan = document.getElementById("dToan" + i);
        let ly = document.getElementById("dLy" + i);
        let hoa = document.getElementById("dHoa" + i);
        let tb = document.getElementById("dTb" + i);
        var diemTB = (toan.innerHTML - (-ly.innerHTML) - (-hoa.innerHTML))/3;
        tb.innerHTML = diemTB.toFixed(2);
    }
}
function hocLuc() {
    for (let i = 1; i < index; i++) {
        let tb = document.getElementById("dTb" + i);
        let hl = document.getElementById("hl" + i);
        if (tb.innerHTML >= 8) {
            hl.innerHTML = "Giỏi"
        } else if (tb.innerHTML < 8 && tb.innerHTML > 5) {
            hl.innerHTML = "Khá"
        } else if (tb.innerHTML < 5 && tb.innerHTML > 3) {
            hl.innerHTML = "Trung Bình"
        } else {
            hl.innerHTML = "Yếu"
        }
    }
}