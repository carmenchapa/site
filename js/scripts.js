function copyEmail() {
  var dialog = document.getElementById("dialog")

  navigator.clipboard.writeText("hello@maieustudio.com").then(
    function () {
      dialog.showModal()
      dialog.classList.add("fullOpacity")

      window.setTimeout(function () {
        dialog.classList.remove("fullOpacity")
      }, 2000)
      window.setTimeout(function () {
        dialog.close()
      }, 3000)
    },
    function () {
      console.log("something went wrong")
    }
  )
}
