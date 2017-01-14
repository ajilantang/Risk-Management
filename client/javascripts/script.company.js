'use strict'
//

// persentase nilai risk

let percentageRisk = (data,totalvalue,weighing) => {
//total value

 let result = [];
 let resultTemp = [];
 // console.log(data[0]);
 let sum =  weighing.reduce((a,b) => Number(a) + Number(b), 0)

 for (var i = 0; i < totalvalue.length; i++) {
   if (data[i][0]==="") {
     resultTemp.push(Number(weighing[i])*100/sum)
     result.push(0)
  }else {
    resultTemp.push(Number(weighing[i])*100/sum)
    result.push(Number(data[i].length)*resultTemp[i]/Number(totalvalue[i].length))
   }
 }


  return (result.reduce((a,b) => a+b ,0)).toFixed(2);


}

// =======================
// fire potential =======
// =====================

function inputData(input){
   var checkedValues = $(`.${input} input:checkbox:checked`).map(function(){
      return this.value;
    }).get().join(',').split(',');
    return checkedValues
}
//=================
//weighing
//=================
let weighingInput = (data) => {
  var value = inputData(data)
  if (value[0]==="") {
    return 0
  }
  return 1
}
//length of data
function lengthData(input){
   var checkedValues = $(`.${input} input:checkbox`).map(function(){
      return this.value;
    }).get().join(',').split(',');
    return checkedValues
}
//insert Ci

let insertData = () => {

  let  information = {
      corporateGroup          : $('#corporateGroup').val(),
      sitename                : $('#sitename').val(),
      Address                 : $('#Address').val(),
      MainOccupancy           : $('#MainOccupancy').val(),
      industryCategory        : $('#industryCategory').val(),
      riskclass               : $('#riskclass').val(),
      longitude               : $('#longitude').val(),
      latitude                : $('#latitude').val(),
      Comment                 : $('#Comment').val()
    }

  insertCi(information)
}

//insert Ci to database

let insertCi = (information) => {
  $.ajax({
    url         : "http://localhost:3000/api/",
    method      : 'post',
    contentType : 'application/x-www-form-urlencoded',
    data        : information,
    success     : function (result){
      alert(`Data profile ${result.corporateGroup} has been inserted, please insert your risk form`)
      //adding button fire,machinery,business,natural
      let buttonFirePot = `<button type="button" class="btn btn-primary"  onclick= "firePot('${result._id}')" >Submit</button>`
      let buttonFireProt = `<button type="button" class="btn btn-primary"  onclick= "fireProt('${result._id}')" >Submit</button>`
      let machineryPot = `<button type="button" class="btn btn-primary"  onclick= "machineryPot('${result._id}')" >Submit</button>`
      let machineryProt = `<button type="button" class="btn btn-primary"  onclick= "machineryProt('${result._id}')" >Submit</button>`
      let naturalPot = `<button type="button" class="btn btn-primary"  onclick= "naturalPot('${result._id}')" >Submit</button>`
      let naturalProt = `<button type="button" class="btn btn-primary"  onclick= "naturalProt('${result._id}')" >Submit</button>`
      let buisnessPot = `<button type="button" class="btn btn-primary"  onclick= "buisnessPot('${result._id}')" >Submit</button>`
      let buisnessProt = `<button type="button" class="btn btn-primary"  onclick= "buisnessProt('${result._id}')" >Submit</button>`
      let profile     = `<ul class="collapse" id ="companyProfileDetail" style="list-style-type:none">
                            <li> Corporate Group : ${result.corporateGroup} </li>
                            <li> Site Name       : ${result.sitename} </li>
                            <li> Address         : ${result.Address} </li>
                            <li> Main Occupancy  : ${result.MainOccupancy} </li>
                        </ul>`
      //replace id
      $("#companyinformation").hide()
      $("#companyProfileDetail").replaceWith(profile)
      $("#buttonFirePot").replaceWith(buttonFirePot)
      $("#buttonFireProt").replaceWith(buttonFireProt)
      $("#machineryPot").replaceWith(machineryPot)
      $("#machineryProt").replaceWith(machineryProt)
      $("#naturalPot").replaceWith(naturalPot)
      $("#naturalProt").replaceWith(naturalProt)
      $("#buisnessPot").replaceWith(buisnessPot)
      $("#buisnessProt").replaceWith(buisnessProt)
      $("#inputmenu").show()

    }
  })

}



// adding fire potential
//
let firePot = (id) => {
  let Data = {
     id              : id,
     operationalRisk : inputData('operationalRisk'),
     warehouseRisk   : inputData('warehouseRisk'),
     materialRisk    : inputData('materialRisk'),
     serviceRisk     : inputData('serviceRisk'),
     processRisk     : inputData('processRisk'),
     percentageRisk  : percentageRisk(
                          [
                            inputData('operationalRisk'),
                            inputData('warehouseRisk'),
                            inputData('materialRisk'),
                            inputData('serviceRisk'),
                            inputData('processRisk')
                         ],[
                           lengthData('operationalRisk'),
                           lengthData('warehouseRisk'),
                           lengthData('materialRisk'),
                           lengthData('serviceRisk'),
                           lengthData('processRisk')
                         ],[
                           weighingInput('operationalRisk'),
                           weighingInput('warehouseRisk'),
                           weighingInput('materialRisk'),
                           weighingInput('serviceRisk'),
                           weighingInput('processRisk')
                        ]
                       )
  }
   $.ajax({
     url         : "http://localhost:3000/api/firePot/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       alert("your fire potential hazardAnalysis has been inserted")
       $("#iconFirepot").replaceWith(`<span id="iconFirepot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.firePot.percentageRisk} % </span>`)
     }
   })

}

// adding fire protection

let fireProt = (id) =>{
  let  Data = {
     id                  : id,
     detection           : inputData('detection'),
     monitoring          : inputData('monitoring'),
     security            : inputData('security'),
     location            : inputData('location'),
     external            : inputData('external'),
     internal            : inputData('internal'),
     construction        : inputData('construction'),
     leakage             : inputData('leakage'),
     building            : inputData('building'),
     firewater           : inputData('firewater'),
     fixedNautomatic     : inputData('fixedNautomatic'),
     manualFire          : inputData('manualFire'),
     emergencyResponse   : inputData('emergencyResponse'),
     isolationNinterlocks: inputData('isolationNinterlocks'),
     specialProtection   : inputData('specialProtection'),
     inspections         : inputData('inspections'),
     maintanance         : inputData('maintanance'),
     safety              : inputData('safety'),
     workforce           : inputData('workforce'),
     safetyWork          : inputData('safetyWork'),
     safeWork            : inputData('safeWork'),
     riskManagement      : inputData('riskManagement'),
     hazardAnalysis      : inputData('hazardAnalysis'),
     documentation       : inputData('documentation'),
     safetyAudits        : inputData('safetyAudits'),
     claimsHandling      : inputData('claimsHandling'),
     percentageRisk      : percentageRisk([
                                    inputData('detection'),
                                    inputData('monitoring'),
                                    inputData('security'),
                                    inputData('location'),
                                    inputData('external'),
                                    inputData('internal'),
                                    inputData('construction'),
                                    inputData('leakage'),
                                    inputData('building'),
                                    inputData('firewater'),
                                    inputData('fixedNautomatic'),
                                    inputData('manualFire'),
                                    inputData('emergencyResponse'),
                                    inputData('isolationNinterlocks'),
                                    inputData('specialProtection'),
                                    inputData('inspections'),
                                    inputData('maintanance'),
                                    inputData('safety'),
                                    inputData('workforce'),
                                    inputData('safetyWork'),
                                    inputData('safeWork'),
                                    inputData('riskManagement'),
                                    inputData('hazardAnalysis'),
                                    inputData('documentation'),
                                    inputData('safetyAudits'),
                                    inputData('claimsHandling')
                                   ],[
                                     lengthData('detection'),
                                     lengthData('monitoring'),
                                     lengthData('security'),
                                     lengthData('location'),
                                     lengthData('external'),
                                     lengthData('internal'),
                                     lengthData('construction'),
                                     lengthData('leakage'),
                                     lengthData('building'),
                                     lengthData('firewater'),
                                     lengthData('fixedNautomatic'),
                                     lengthData('manualFire'),
                                     lengthData('emergencyResponse'),
                                     lengthData('isolationNinterlocks'),
                                     lengthData('specialProtection'),
                                     lengthData('inspections'),
                                     lengthData('maintanance'),
                                     lengthData('safety'),
                                     lengthData('workforce'),
                                     lengthData('safetyWork'),
                                     lengthData('safeWork'),
                                     lengthData('riskManagement'),
                                     lengthData('hazardAnalysis'),
                                     lengthData('documentation'),
                                     lengthData('safetyAudits'),
                                     lengthData('claimsHandling')
                                   ],[
                                      weighingInput('detection'),
                                      weighingInput('monitoring'),
                                      weighingInput('security'),
                                      weighingInput('location'),
                                      weighingInput('external'),
                                      weighingInput('internal'),
                                      weighingInput('construction'),
                                      weighingInput('leakage'),
                                      weighingInput('building'),
                                      weighingInput('firewater'),
                                      weighingInput('fixedNautomatic'),
                                      weighingInput('manualFire'),
                                      weighingInput('emergencyResponse'),
                                      weighingInput('isolationNinterlocks'),
                                      weighingInput('specialProtection'),
                                      weighingInput('inspections'),
                                      weighingInput('maintanance'),
                                      weighingInput('safety'),
                                      weighingInput('workforce'),
                                      weighingInput('safetyWork'),
                                      weighingInput('safeWork'),
                                      weighingInput('riskManagement'),
                                      weighingInput('hazardAnalysis'),
                                      weighingInput('documentation'),
                                      weighingInput('safetyAudits'),
                                      weighingInput('claimsHandling')
                                     ])
  }
   $.ajax({
     url         : "http://localhost:3000/api/fireProt/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
      alert("thanks")
         $("#iconFireprot").replaceWith(`<span id="iconFireprot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.fireProt.percentageRisk} %</span>`)
     }
   })

}

//machinery potential

let machineryPot = (id) => {

  let Data = {
       id                      : id,
       plantconfig             : inputData('plantconfig'),
       proventechnology        : inputData('proventechnology'),
       physicalCondition       : inputData('physicalCondition'),
       maintananceProgram      : inputData('maintananceProgram'),
       technicalSafety         : inputData('technicalSafety'),
       ExperienceNQuallified   : inputData('ExperienceNQuallified'),

       wplantconfig             : $('#wplantconfig').val(),
       wproventechnology        : $('#wproventechnology').val(),
       wphysicalCondition       : $('#wphysicalCondition').val(),
       wmaintananceProgram      : $('#wmaintananceProgram').val(),
       wtechnicalSafety         : $('#wtechnicalSafety').val(),
       wExperienceNQuallified   : $('#wExperienceNQuallified').val(),
       percentageRisk          : percentageRisk(
                                  [

                                  inputData('plantconfig'),
                                   inputData('proventechnology'),
                                   inputData('physicalCondition'),
                                   inputData('maintananceProgram'),
                                   inputData('technicalSafety'),
                                   inputData('ExperienceNQuallified')

                                 ],[
                                   lengthData('plantconfig'),
                                    lengthData('proventechnology'),
                                    lengthData('physicalCondition'),
                                    lengthData('maintananceProgram'),
                                    lengthData('technicalSafety'),
                                    lengthData('ExperienceNQuallified')
                                 ]
                                  ,[
                                    weighingInput('plantconfig'),
                                     weighingInput('proventechnology'),
                                     weighingInput('physicalCondition'),
                                     weighingInput('maintananceProgram'),
                                     weighingInput('technicalSafety'),
                                     weighingInput('ExperienceNQuallified')
                                  ])
    }

   $.ajax({
     url         : "http://localhost:3000/api/machineryPot/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       alert("thanks")
          $("#iconMachinerypot").replaceWith(`<span id="iconMachinerypot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.machineryPot.percentageRisk} %</span>`)

     }
   })


}

// adding to machineryProt

let machineryProt = (id) => {


  let Data = {
     id                       : id,
     plantconfig2             : inputData('plantconfig2'),
     proventechnology2        : inputData('proventechnology2'),
     physicalCondition2       : inputData('physicalCondition2'),
     maintananceProgram2      : inputData('maintananceProgram2'),
     technicalSafety2         : inputData('technicalSafety2'),
     ExperienceNQuallified2   : inputData('ExperienceNQuallified2'),

     percentageRisk           : percentageRisk(
                                [
                                inputData('plantconfig2'),
                                 inputData('proventechnology2'),
                                 inputData('physicalCondition2'),
                                 inputData('maintananceProgram2'),
                                 inputData('technicalSafety2'),
                                 inputData('ExperienceNQuallified2')
                                ],
                                [
                                  lengthData('plantconfig2'),
                                  lengthData('proventechnology2'),
                                  lengthData('physicalCondition2'),
                                  lengthData('maintananceProgram2'),
                                  lengthData('technicalSafety2'),
                                  lengthData('ExperienceNQuallified2')

                                ],
                                [
                                  weighingInput('plantconfig2'),
                                   weighingInput('proventechnology2'),
                                   weighingInput('physicalCondition2'),
                                   weighingInput('maintananceProgram2'),
                                   weighingInput('technicalSafety2'),
                                   weighingInput('ExperienceNQuallified2')
                                ])
  }

   $.ajax({
     url         : "http://localhost:3000/api/machineryProt/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       alert("thanks")
       $("#iconMachineryprot").replaceWith(`  <span class="glyphicon glyphicon-ok" id="iconMachineryprot" aria-hidden="true"> ${data.machineryProt.percentageRisk} %</span> `)

     }
   })


}

//adding to natural potential

let naturalPot = (id) =>  {


  let Data = {
    id             : id,
     earthquake     : inputData('earthquake'),
     floodExposure  : inputData('floodExposure'),
     windexposure   : inputData('windexposure'),
     weather        : inputData('weather'),
     otherperils    : inputData('otherperils'),

     percentageRisk : percentageRisk(
                       [
                         inputData('earthquake'),
                        inputData('floodExposure'),
                        inputData('windexposure'),
                        inputData('weather'),
                        inputData('otherperils')
                       ],
                       [
                         lengthData('earthquake'),
                        lengthData('floodExposure'),
                        lengthData('windexposure'),
                        lengthData('weather'),
                        lengthData('otherperils')
                       ],
                      [

                          weighingInput('earthquake'),
                         weighingInput('floodExposure'),
                         weighingInput('windexposure'),
                         weighingInput('weather'),
                         weighingInput('otherperils')
                      ])
  }
   $.ajax({
     url         : "http://localhost:3000/api/naturalPot/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       alert("thanks")
       $("#iconNaturalpot").replaceWith(`<span id="iconNaturalpot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.naturalPot.percentageRisk} %</span>`)


     }
   })

}

//adding to natural protection

let naturalProt = (id) => {


  let Data = {
     id             : id,
     earthquake2     : inputData('earthquake2'),
     floodExposure2  : inputData('floodExposure2'),
     windexposure2   : inputData('windexposure2'),
     weather2        : inputData('weather2'),
     otherperils2    : inputData('otherperils2'),

     percentageRisk  : percentageRisk(
                      [
                        inputData('earthquake2'),
                       inputData('floodExposure2'),
                       inputData('windexposure2'),
                       inputData('weather2'),
                       inputData('otherperils2')
                      ],
                      [
                        lengthData('earthquake2'),
                       lengthData('floodExposure2'),
                       lengthData('windexposure2'),
                       lengthData('weather2'),
                       lengthData('otherperils2')
                      ],
                      [
                      weighingInput('earthquake2'),
                       weighingInput('floodExposure2'),
                       weighingInput('windexposure2'),
                       weighingInput('weather2'),
                       weighingInput('otherperils2')
                      ])
  }

   $.ajax({
     url         : "http://localhost:3000/api/naturalProt/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       alert("thanks")
       $("#iconNaturalprot").replaceWith(`<span id="iconNaturalprot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.naturalProt.percentageRisk} %</span>`)
     }
   })

}

//adding to buisnessPot

let buisnessPot = (id) => {

 let Data = {
     id                  : id,
     general             :inputData('general'),
     processFlow         :inputData('processFlow'),
     interdependency     :inputData('interdependency'),
     contingent          :inputData('contingent'),
     businessContinuity  :inputData('businessContinuity'),

     percentageRisk      :percentageRisk(
                          [
                            inputData('general'),
                           inputData('processFlow'),
                           inputData('interdependency'),
                           inputData('contingent'),
                           inputData('businessContinuity')
                         ],
                         [
                           lengthData('general'),
                          lengthData('processFlow'),
                          lengthData('interdependency'),
                          lengthData('contingent'),
                          lengthData('businessContinuity')
                        ],
                          [
                            weighingInput('general'),
                           weighingInput('processFlow'),
                           weighingInput('interdependency'),
                           weighingInput('contingent'),
                           weighingInput('businessContinuity')
                          ])
  }

   $.ajax({
     url         : "http://localhost:3000/api/buisnessPot/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       alert("okee")
       $("#iconBusinesspot").replaceWith(`<span id="iconBusinesspot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.businessPot.percentageRisk} %</span>`)


     }
   })

}

//adding to buisnessProt

let buisnessProt = (id) => {


  let Data = {
       id                  : id,
       general2             :inputData('general2'),
       processFlow2         :inputData('processFlow2'),
       interdependency2     :inputData('interdependency2'),
       contingent2          :inputData('contingent2'),
       businessContinuity2  :inputData('businessContinuity2'),

       percentageRisk       :percentageRisk(
                              [
                                inputData('general2'),
                               inputData('processFlow2'),
                               inputData('interdependency2'),
                               inputData('contingent2'),
                               inputData('businessContinuity2')
                              ],
                              [
                                lengthData('general2'),
                               lengthData('processFlow2'),
                               lengthData('interdependency2'),
                               lengthData('contingent2'),
                               lengthData('businessContinuity2')
                              ],
                              [
                                weighingInput('general2'),
                               weighingInput('processFlow2'),
                               weighingInput('interdependency2'),
                               weighingInput('contingent2'),
                               weighingInput('businessContinuity2')
                              ])
    }

   $.ajax({
     url         : "http://localhost:3000/api/buisnessProt/"+id,
     method      : 'put',
     contentType : 'application/x-www-form-urlencoded',
     data        : Data,
     success     : function(data) {
       $("#iconBusinessprot").replaceWith(`<span id="iconBusinessprot" class="glyphicon glyphicon-ok" aria-hidden="true"> ${data.businessProt.percentageRisk} %</span>`)


     }
   })

}
