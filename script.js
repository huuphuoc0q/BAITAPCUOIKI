function showToast(){
    const toastEl = document.getElementById('thongbao_fav');
    const toast = new bootstrap.Toast(toastEl, {
      autohide: true,   
      delay: 2000       
    });
    toast.show();
}

function kiemtra_danhmuc(){
  document.querySelectorAll('.link_danhmuc').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let val = link.innerText;
            let type_danhmuc = val;
            switch (val) {
                case "ÁO SƠ MI":
                    val = "somi";
                    break;
                case "QUẦN ÂU":
                    val = "quanau";
                    break;
                case "ÁO THUN":
                    val = "aothun";
                    break;
                case "ÁO DÀI":
                    val = "aodai";
                    break;
                case "ĐẦM VÁY":
                    val = "damvay";
                    break;
                default:
                    val = "none";
                    break;
                }

            const data = { 
                value: val,
                type_: type_danhmuc
             };
            localStorage.setItem("typeProductData", JSON.stringify(data));
            window.location.href = "trangdanhmuc.html";
        });
    });
}