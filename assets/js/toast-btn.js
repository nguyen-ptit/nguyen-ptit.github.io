function submitAlert() {

    const main = document.getElementById('toast');
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
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var team = document.getElementById("team").value;
    var position = document.getElementById("position").value;
    var description = document.getElementById("description").value;

    var form = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        // team: document.getElementById("team").value,
        // position: document.getElementById("position").value,
        description: document.getElementById("description").value
    }
    console.log(form);

    // var yourdomain = 'tinasoft'; // Your freshdesk domain name. Ex., yourcompany
    // var api_key = 'NMInYbuYa1Xd1ph9KcgS'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key

    // const response = await fetch("https://" + yourdomain + ".freshdesk.com/api/v2/tickets", {
    //     method: 'POST',
    //     body: form, // string or object
    //     headers: {
    //         'Content-Type': 'application/json; charset=utf-8',
    //         "Authorization": "Basic " + btoa(api_key + ":x")
    //     }
    // });
    // const myJson = await response.json(); //extract JSON from the http response
    // // do something with myJson
    var form = document.getElementById("formConnect");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);
}