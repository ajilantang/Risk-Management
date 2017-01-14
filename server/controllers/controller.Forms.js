'use strict'
const riskForms = require('../models/riskForms.js');

  // create data

  let createData = ( req, res ) => {
    console.log(req.body);
    console.log(typeof(req.body.riskclass));
    riskForms.create({
        corporateGroup          : req.body.corporateGroup,
        sitename                : req.body.sitename,
        Address                 : req.body.Address,
        MainOccupancy           : req.body.MainOccupancy,
        industryCategory        : req.body.industryCategory,
        riskclass               : req.body.riskclass,
        longitude               : req.body.longitude,
        latitude                : req.body.latitude,
        Comment                 : req.body.Comment
    }, (err,data) => {
      if (err) {
        console.log("gagal");
        res.status(404)
      }else {
        // console.log(data);
        res.json(data)
      }
    })

  }

  // add fire potential

  let addFirePot = (req, res) => {

    console.log(typeof req.body.operationalRisk);
    console.log(req.body.operationalRisk);
    console.log(req.body.wOperationRisk);
    // console.log("firePot");
      riskForms.findById(req.params.id, (err,data) => {
        if(err) {
          res.json('not found')
        }else {
          // console.log("ini" +data);
          data.firePot = {
          operationalRisk : req.body.operationalRisk,
          warehouseRisk   : req.body.warehouseRisk,
          materialRisk    : req.body.materialRisk,
          serviceRisk     : req.body.serviceRisk,
          processRisk     : req.body.processRisk,

          weighing        : {  warehouseRisk    : 1,
                                operationalRisk : 1,
                                materialRisk    : 1,
                                serviceRisk     : 1,
                                processRisk     : 1 },
          percentageRisk  : req.body.percentageRisk

        }
        // data.firePot.warehouseRisk.push(req.body.warehouseRisk),

        data.save((err,result) => {
          if(err) res.json('failed')
          res.json(result)
        })

        }

    })
}


//add fire protection

  let addFireProt = (req, res) => {
    console.log("masuk protection fire");
      riskForms.findById(req.params.id, (err,data) => {
        if(err) res.json('not found')

        data.fireProt = {
          detection           : req.body.detection,
          monitoring          : req.body.monitoring,
          security            : req.body.security,
          location            : req.body.location,
          external            : req.body.external,
          internal            : req.body.internal,
          construction        : req.body.construction,
          leakage             : req.body.leakage,
          building            : req.body.building,
          firewater           : req.body.firewater,
          fixedNautomatic     : req.body.fixedNautomatic,
          manualFire          : req.body.manualFire,
          emergencyResponse   : req.body.emergencyResponse,
          isolationNinterlocks: req.body.isolationNinterlocks,
          specialProtection   : req.body.specialProtection,
          inspections         : req.body.inspections,
          maintanance         : req.body.maintanance,
          safety              : req.body.safety,
          workforce           : req.body.workforce,
          safetyWork          : req.body.safetyWork,
          riskManagement      : req.body.riskManagement,
          hazardAnalysis      : req.body.hazardAnalysis,
          documentation       : req.body.documentation,
          safetyAudits        : req.body.safetyAudits,
          claimsHandling      : req.body.claimsHandling,
          percentageRisk      : req.body.percentageRisk,
          safeWork            : req.body.safeWork,
          weighing            : {     detection           : 1,
                                      monitoring          : 1,
                                      security            : 1,
                                      location            : 1,
                                      external            : 1,
                                      internal            : 1,
                                      construction        : 1,
                                      leakage             : 1,
                                      building            : 1,
                                      firewater           : 1,
                                      fixedNautomatic     : 1,
                                      manualFire          : 1,
                                      emergencyResponse   : 1,
                                      isolationNinterlocks: 1,
                                      specialProtection   : 1,
                                      inspections         : 1,
                                      maintanance         : 1,
                                      safety              : 1,
                                      workforce           : 1,
                                      safetyWork          : 1,
                                      safeWork            : 1,
                                      riskManagement      : 1,
                                      hazardAnalysis      : 1,
                                      documentation       : 1,
                                      safetyAudits        : 1,
                                      claimsHandling      : 1 },
        percentageRisk          : req.body.percentageRisk

        }

      data.save((err,result) => {
        if(err) res.json('failed')
        res.json(result)
      })
    })
}

// machineryPotential

let createMachineryPot = (req,res) => {

  console.log(req.body);
    riskForms.findById(req.params.id, (err,data) => {
      if(err) res.json('not found')

      data.machineryPot = {

        plantconfig             : req.body.plantconfig,
        proventechnology        : req.body.proventechnology,
        physicalCondition       : req.body.physicalCondition,
        maintananceProgram      : req.body.maintananceProgram,
        technicalSafety         : req.body.technicalSafety,
        ExperienceNQuallified   : req.body.ExperienceNQuallified,
        weighing                : {

                                  plantconfig             :1,
                                  proventechnology        :1,
                                  physicalCondition       :1,
                                  maintananceProgram      :1,
                                  technicalSafety         :1,
                                  ExperienceNQuallified   :1

                                  },
        percentageRisk          : req.body.percentageRisk

      }

    data.save((err,result) => {

      if(err) res.json('failed')
      res.json(result)
    })

  })

}


//  create machineryProt

let createMachineryProt = (req,res) => {

  console.log(req.body);
    riskForms.findById(req.params.id, (err,data) => {
      if(err) res.json('not found')

      data.machineryProt = {

        plantconfig2             : req.body.plantconfig2,
        proventechnology2        : req.body.proventechnology2,
        physicalCondition2       : req.body.physicalCondition2,
        maintananceProgram2      : req.body.maintananceProgram2,
        technicalSafety2         : req.body.technicalSafety2,
        ExperienceNQuallified2   : req.body.ExperienceNQuallified2,
        weighing                : {

                                  plantconfig2             :1,
                                  proventechnology2        :1,
                                  physicalCondition2       :1,
                                  maintananceProgram2      :1,
                                  technicalSafety2         :1,
                                  ExperienceNQuallified2   :1

                                  },
        percentageRisk           : req.body.percentageRisk

      }

    data.save((err,result) => {
      if(err) res.json('failed')
      res.json(result)
    })
  })

}

// create businessPot

let createBuisnessPot = (req,res) => {

    console.log(req.body);
      riskForms.findById(req.params.id, (err,data) => {
        if(err) res.json('not found')

        data.businessPot = {

          general             : req.body.general,
          processFlow         : req.body.processFlow,
          interdependency     : req.body.interdependency,
          contingent          : req.body.contingent,
          businessContinuity  : req.body.businessContinuity,
          weighing             : {


                                    general               :1,
                                    processFlow           :1,
                                    interdependency       :1,
                                    contingent            :1,
                                    businessContinuity    :1

                                    },
          percentageRisk      : req.body.percentageRisk
        }

      data.save((err,result) => {
        if(err) res.json('failed')
        res.json(result)
      })
    })
}

// create businessProt

let createBuisnessProt = (req,res) => {

  console.log(req.body);
    riskForms.findById(req.params.id, (err,data) => {
      if(err) res.json('not found')

      data.businessProt = {

        general2             : req.body.general2,
        processFlow2         : req.body.processFlow2,
        interdependency2     : req.body.interdependency2,
        contingent2          : req.body.contingent2,
        businessContinuity2  : req.body.businessContinuity2,
        weighing             : {


                                  general2               :1,
                                  processFlow2           :1,
                                  interdependency2       :1,
                                  contingent2            :1,
                                  businessContinuity2    :1

                                  },
        percentageRisk       : req.body.percentageRisk

      }

    data.save((err,result) => {
      if(err) res.json('failed')
      res.json(result)

    })
  })

}

//  create naturalPot

let createNaturalPot = (req ,res) => {

      riskForms.findById(req.params.id, (err,data) => {
        if(err) res.json('not found')

        data.naturalPot = {

          earthquake     : req.body.earthquake,
          floodExposure  : req.body.floodExposure,
          windexposure   : req.body.windexposure,
          weather        : req.body.weather,
          otherperils    : req.body.otherperils,
          weighing       : {

                            earthquake     :1,
                            floodExposure  :1,
                            windexposure   :1,
                            weather        :1,
                            otherperils    :1

                            },
          percentageRisk : req.body.percentageRisk

        }

      data.save((err,result) => {
        if(err) res.json('failed')
        res.json(result)
      })
    })
}

// create natural Port


let createNaturalProt = (req ,res) => {

      riskForms.findById(req.params.id, (err,data) => {
        if(err) res.json('not found')

        data.naturalProt = {

          earthquake2     : req.body.earthquake2,
          floodExposure2  : req.body.floodExposure2,
          windexposure2   : req.body.windexposure2,
          weather2        : req.body.weather2,
          otherperils2    : req.body.otherperils2,
          weighing       : {

                            earthquake2     :1,
                            floodExposure2  :1,
                            windexposure2   :1,
                            weather2        :1,
                            otherperils2    :1

                            },
          percentageRisk  : req.body.percentageRisk

        }

      data.save((err,result) => {
        if(err) res.json('failed')
        res.json(result)
      })
    })

}

//show all data

let findDataId = (req,res) => {
  riskForms.find({},(err,data) => {
    if(err) res.json('not found')
    else res.json(data)
  })
}


// find data by id

let getById = ( req, res ) => {

  riskForms.findById(req.params.id , (err,data) => {
    if(err) res.json('not found')
    else res.json(data)
  })

}
 module.exports = {

   getById             : getById,
   findDataId          : findDataId,
   createData          : createData,
   addFirePot          : addFirePot,
   addFireProt         : addFireProt,
   createBuisnessPot   : createBuisnessPot,
   createBuisnessProt  : createBuisnessProt,
   createNaturalPot    : createNaturalPot,
   createNaturalProt   : createNaturalProt,
   createMachineryProt : createMachineryProt,
   createMachineryPot  : createMachineryPot


 }
