var index = 1;
function add() {
    let tbody = document.getElementById("mid");
    let tr = document.createElement("tr");
    tbody.append(tr);
    tr.id = index;
    let tdHoTen = document.createElement("td");
    let tdNgaySinh = document.createElement("td");
    let tdDiemToan = document.createElement("td");
    let tdDiemLy = document.createElement("td");
    let tdDiemHoa = document.createElement("td");
    let tdDiemTrungBinh = document.createElement("td");
    let tdHocLuc = document.createElement("td");
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
    let tenInput = document.getElementById("name");
    let ngaySinhInput = document.getElementById("DOB");
    let diemToanInput = document.getElementById("diemToan");
    let diemLyInput = document.getElementById("diemLy");
    let diemHoaInput = document.getElementById("diemHoa");
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
        let diemTB = (toan.innerHTML - (-ly.innerHTML) - (-hoa.innerHTML))/3;
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
        } else if (tb.innerHTML <= 5 && tb.innerHTML >= 3) {
            hl.innerHTML = "Trung Bình"
        } else {
            hl.innerHTML = "Yếu"
        }
    }
}