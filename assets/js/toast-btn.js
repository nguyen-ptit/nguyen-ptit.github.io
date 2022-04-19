function submitAlert() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
    const main = document.getElementById('toast');
    if (name != "") {
        if (phone != "") {
            if (email != "") {
                if (description != "") {
                    if (main) {
                        const toast = document.createElement('div');
                        toast.classList.add('toast-alert');
                        toast.innerHTML = `
            <div class="d-flex align-items-center justify-content-between toast-btn" id="toast-success">
                <div class="d-flex align-items-center">
                    <div>
                        <img src="./assets/img/favicons/icons8-ok.gif" alt="" style="width: 40px; margin-right: 20px;">
                    </div>
                    <div>
                        <h4 class="fw-bold">Gửi thông tin liên hệ thành công!</h4>
                        <h5>Chúng tôi sẽ liên hệ với bạn sớm nhất</h5>
                    </div>
                </div>
                <div>
                    <img src="./assets/img/favicons/icons8-close-24.png" alt="">
                </div>
            </div>
        `;
                        main.appendChild(toast);
                    }
                }
            }
        }
    }

    var form = document.getElementById("formConnect");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
}