const nameData = document.querySelector("#name")
const birthData = document.querySelector("#birthday")
const cpfData = document.querySelector("#cpf")
const celData = document.querySelector("#cel")
const mailData = document.querySelector("#mail")
const admissData = document.querySelector("#dateAdmiss")
const areaData = document.querySelector("#area")

const dataDiv = document.querySelector("#data-div")

function Confirm(){

    let obtainedDatas = JSON.parse(localStorage.getItem("employeeDatas"))

    let dataValues

    console.log(obtainedDatas)

    if(obtainedDatas == null){
        dataValues = []
    }else{
        dataValues = obtainedDatas
    }

        dataValues.push({
            nome: nameData.value,
            data_nascimento: birthData.value,
            cpf: cpfData.value,
            cel: celData.value,
            email: mailData.value,
            data_admiss: admissData.value,
            area: areaData.value 
        })

        if(dataValues.length >= 8){
            window.alert("dssdsdsd")
        }else{
            dataValues.map((element, index) => {
                let dataItem = document.createElement("div")
                dataItem.key={index}
                dataItem.style = `background-color: white; height: 40px; border-radius: 5px; padding-left: 5px`
                dataItem.innerHTML = `<p>${element.nome}</p>`
                dataDiv.appendChild(dataItem)
            })
        }

        localStorage.setItem("employeeDatas", JSON.stringify(dataValues))
}

