'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema ;



//=====================
//  corporate form ===
//===================

let corporateForm = new Schema ({

  corporateGroup          : { type:String , required :true},
  sitename                : { type:String , required :true},
  Address                 : { type:String , required :true},
  MainOccupancy           : { type:String , required :true},
  industryCategory        : { type:String , required :true},
  riskclass               : { type:String , required :true},
  longitude               : { type:String , required :true},
  latitude                : { type:String , required :true},
  Comment                 : { type:String , required :false},

  /*
  set default value 0 for every parameters
  */

  firePot                 : {
    warehouseRisk   : [{ type:String , required :false}],
    operationalRisk : [{ type:String , required :false}],
    materialRisk    : [{ type:String , required :false}],
    serviceRisk     : [{ type:String , required :false}],
    processRisk     : [{ type:String , required :false}],
    weighing        : {   warehouseRisk   : Number,
                          operationalRisk : Number,
                          materialRisk    : Number,
                          serviceRisk     : Number,
                          processRisk     : Number },
    percentageRisk  : { type:String }
  },

  fireProt                : {
    detection           : [{ type:String , required :false  }],
    monitoring          : [{ type:String , required :false  }],
    security            : [{ type:String , required :false  }],
    location            : [{ type:String , required :false  }],
    external            : [{ type:String , required :false  }],
    internal            : [{ type:String , required :false  }],
    construction        : [{ type:String , required :false  }],
    leakage             : [{ type:String , required :false  }],
    building            : [{ type:String , required :false  }],
    firewater           : [{ type:String , required :false  }],
    fixedNautomatic     : [{ type:String , required :false  }],
    manualFire          : [{ type:String , required :false  }],
    emergencyResponse   : [{ type:String , required :false  }],
    isolationNinterlocks: [{ type:String , required :false  }],
    specialProtection   : [{ type:String , required :false  }],
    inspections         : [{ type:String , required :false  }],
    maintanance         : [{ type:String , required :false  }],
    safety              : [{ type:String , required :false  }],
    workforce           : [{ type:String , required :false  }],
    safetyWork          : [{ type:String , required :false  }],
    safeWork            : [{ type:String , required :false  }],
    riskManagement      : [{ type:String , required :false  }],
    hazardAnalysis      : [{ type:String , required :false  }],
    documentation       : [{ type:String , required :false  }],
    safetyAudits        : [{ type:String , required :false  }],
    claimsHandling      : [{ type:String , required :false  }],
    weighing            : {
                          detection           :Number,
                          monitoring          :Number,
                          security            :Number,
                          location            :Number,
                          external            :Number,
                          internal            :Number,
                          construction        :Number,
                          leakage             :Number,
                          building            :Number,
                          firewater           :Number,
                          fixedNautomatic     :Number,
                          manualFire          :Number,
                          emergencyResponse   :Number,
                          isolationNinterlocks:Number,
                          specialProtection   :Number,
                          inspections         :Number,
                          maintanance         :Number,
                          safety              :Number,
                          workforce           :Number,
                          safetyWork          :Number,
                          safeWork            :Number,
                          riskManagement      :Number,
                          hazardAnalysis      :Number,
                          documentation       :Number,
                          safetyAudits        :Number,
                          claimsHandling      :Number
                          },
    percentageRisk      : { type:String}
  },

  machineryPot            : {

    plantconfig             :[{ type:String , required :false  }],
    proventechnology        :[{ type:String , required :false  }],
    physicalCondition       :[{ type:String , required :false  }],
    maintananceProgram      :[{ type:String , required :false  }],
    technicalSafety         :[{ type:String , required :false  }],
    ExperienceNQuallified   :[{ type:String , required :false  }],
    weighing                : {
                              plantconfig             : Number,
                              proventechnology        : Number,
                              physicalCondition       : Number,
                              maintananceProgram      : Number,
                              technicalSafety         : Number,
                              ExperienceNQuallified   : Number
                              },
    percentageRisk          : { type  : String }

  },

  machineryProt           : {

    plantconfig2             :[{ type:String , required :false  }],
    proventechnology2        :[{ type:String , required :false  }],
    physicalCondition2       :[{ type:String , required :false  }],
    maintananceProgram2      :[{ type:String , required :false  }],
    technicalSafety2         :[{ type:String , required :false  }],
    ExperienceNQuallified2   :[{ type:String , required :false  }],
    weighing                 : {
                                plantconfig2             : Number,
                                proventechnology2        : Number,
                                physicalCondition2       : Number,
                                maintananceProgram2      : Number,
                                technicalSafety2         : Number,
                                ExperienceNQuallified2   : Number
                              },
    percentageRisk           : { type : String }
  },

  businessPot             : {

      general             :[{ type:String , required :false  }],
      processFlow         :[{ type:String , required :false  }],
      interdependency     :[{ type:String , required :false  }],
      contingent          :[{ type:String , required :false  }],
      businessContinuity  :[{ type:String , required :false  }],
      weighing            : {
                            general             : Number,
                            processFlow         : Number,
                            interdependency     : Number,
                            contingent          : Number,
                            businessContinuity  : Number,
                                },
      percentageRisk      : { type :String}

  },

  businessProt            : {

    general2             :[{ type:String , required :false  }],
    processFlow2         :[{ type:String , required :false  }],
    interdependency2     :[{ type:String , required :false  }],
    contingent2          :[{ type:String , required :false  }],
    businessContinuity2  :[{ type:String , required :false  }],
    weighing            : {
                          general2             : Number,
                          processFlow2         : Number,
                          interdependency2     : Number,
                          contingent2          : Number,
                          businessContinuity2  : Number,
                        },
    percentageRisk       : { type :String }
  },

  naturalPot              : {

    earthquake     :[{ type:String , required :false  }],
    floodExposure  :[{ type:String , required :false  }],
    windexposure   :[{ type:String , required :false  }],
    weather        :[{ type:String , required :false  }],
    otherperils    :[{ type:String , required :false  }],
    weighing       : {

                      earthquake     : Number,
                      floodExposure  : Number,
                      windexposure   : Number,
                      weather        : Number,
                      otherperils    : Number

                    },
    percentageRisk : { type :String}

  },
  naturalProt             : {

    earthquake2     :[{ type:String , required :false  }],
    floodExposure2  :[{ type:String , required :false  }],
    windexposure2   :[{ type:String , required :false  }],
    weather2        :[{ type:String , required :false  }],
    otherperils2    :[{ type:String , required :false  }],
    weighing       : {

                      earthquake2     : Number,
                      floodExposure2  : Number,
                      windexposure2   : Number,
                      weather2        : Number,
                      otherperils2    : Number

                    },
    percentageRisk  : { type :String}
  }

})

module.exports = mongoose.model('corporateForm', corporateForm)
