async function fetchData(category) {
    try {
        let holder = document.getElementById("smiley-holder")
        holder.innerHTML = ""
        let catData = await fetch(`https://emojihub.yurace.pro/api/all/category/${category}`)
        let resp = await catData.json()
        console.log(resp)
        resp.forEach(element => {
            let smileyDiv = document.createElement("div")
            smileyDiv.setAttribute("style", "width: 100px;height:100px;border-radius: 30px;")
            smileyDiv.setAttribute("class", "m-3")

            let smileySpan = document.createElement("button")
            smileySpan.setAttribute("class", "btn")
            smileySpan.setAttribute("style", "position: relative; top: 40%; left: 40%;")
            smileySpan.setAttribute("data-bs-toggle", "tooltip")
            smileySpan.setAttribute("data-bs-placement", "top")
            smileySpan.setAttribute("data-bs-title", "Copy")
            smileySpan.innerHTML = element.htmlCode[0]

            smileySpan.onclick = () => {
                navigator.clipboard.writeText(element.htmlCode[0]).then(function () {
                }).catch(function (error) {
                    console.error("Failed to copy text: ", error);
                });
            }

            smileyDiv.appendChild(smileySpan)


            holder.appendChild(smileyDiv)
        });
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    } catch (error) {
        console.log(error)
    }
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))