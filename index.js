{
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcomtents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcomtents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }
}

{
    window.onscroll = () => {
        let header = document.querySelector('.navbar');

        header.classList.toggle('sticky', window.scrollY > 100);
    };
}

{
    var sidemen = document.getElementById("sidemenu");

    function openmenu() {
        sidemen.style.right = "0";
    }
    function closemenu() {
        sidemen.style.right = "-200px";
    }

}

{
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx70T6V-UIKJyLSZYMDbcBce1lg0TesVD-sPksIL6PfzDZxAb2E5eHjByNIkGGSnRACnw/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent succesfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
}