const covid19ImpactEstimator = (data) => data;


const inputData = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};

const takeInputAsDays = (days) => Math.floor(days / 3);// defining the input for number of days and having the output as an integer

const impact = (inputData) => inputData.reportedCases * 10;
//estimating the number of currently infected people for impact

const severeImpact = (inputData) => inputData.reportedCases * 50;
//estimating the number of currently infected people for severe impact

const infectionsByRequestedTimeImpact = (takeInputAsDays, impact) => takeInputAsDays * 2 * impact;
//estimating the number of infections by time in days for impact

const infectionsByRequestedTimeSevereImpact = (takeInputAsDays, severeImpact) => takeInputAsDays * 2 * severeImpact;
//estimating the number of infections by time in days for severe impact

const severeCasesByRequestedTimeImpact = (infectionsByRequestedTimeImpact) => infectionsByRequestedTimeImpact * 0.15;
//estimating the number of severe positive cases that will require hospitalization to recover for impact

const severeCasesByRequestedTimeSevereImpact = (infectionsByRequestedTimeSevereImpact) => infectionsByRequestedTimeSevereImpact * 0.15;
////estimating the number of severe positive cases that will require hospitalization to recover for severe impact

const hospitalBedsByRequestedTimeImpact = (severeCasesByRequestedTimeImpact) => (0.35 * inputData.totalHospitalBeds) - severeCasesByRequestedTimeImpact;
//estimating the number of hospital beds for impact

const hospitalBedsByRequestedTimeSevereImpact = (severeCasesByRequestedTimeSevereImpact) => (0.35 * inputData.totalHospitalBeds) - severeCasesByRequestedTimeSevereImpact;
//estimating the number if hospital beds for severe impact

const infectionsByRequestedTimeICUImpact = (infectionsByRequestedTimeImpact) => 0.5 * infectionsByRequestedTimeImpact;
//estimating the number of ICU cases for impact

const infectionsByRequestedTimeICUSevereImpact = (infectionsByRequestedTimeSevereImpact) => 0.5 * infectionsByRequestedTimeSevereImpact;
//estimating the number of ICU cases for severe impact

const infectionsByRequestedTimeVentilatorsImpact = (infectionsByRequestedTimeImpact) => 0.2 * infectionsByRequestedTimeImpact;
//estimating the number of patients that need ventilators for impact

const infectionsByRequestedTimeVentilatorsSevereImpact = (infectionsByRequestedTimeSevereImpact) => 0.2 * infectionsByRequestedTimeSevereImpact;
//estimating the number if patients that need ventilators for severe impact

const infectionsByRequestedTimeIncomeImpact = (infectionsByRequestedTimeImpact, takeInputAsDays) => (infectionsByRequestedTimeImpact * 0.71 * 5) / takeInputAsDays;
//estimating the income impact for impact

const infectionsByRequestedTimeIncomeSevereImpact = (infectionsByRequestedTimeSevereImpact, takeInputAsDays) => (infectionsByRequestedTimeSevereImpact * 0.71 * 5) / takeInputAsDays;
//estimating the income impact for severe impact

/*Output*/

const output = {
    data: {
        takeInputAsDays()
    }, // the input data you got
    impact: {
        currentlyInfected: impact(),
        infectionsByRequestedtime: infectionsByRequestedTimeImpact,
        severeCasesByRequestedTime: severeCasesByRequestedTimeImpact,
        hospitalBedsByRequestedTime: hospitalBedsByRequestedTimeImpact,
        casesForICUByRequestedTime: infectionsByRequestedTimeICUImpact,
        casesForVentilatorsByRequestedTime: infectionsByRequestedTimeVentilatorsImpact,
        dollarsInFlight: infectionsByRequestedTimeIncomeImpact,

    }, // your best case estimation
    severeImpact: {
        currentlyInfected: severeImpact,
        infectionsByRequestedTime: infectionsByRequestedTimeSevereImpact,
        severeCasesByRequestedTime: severeCasesByRequestedTimeSevereImpact,
        hospitalBedsByRequestedTime: hospitalBedsByRequestedTimeSevereImpact,
        casesForICUByRequestedTime: infectionsByRequestedTimeICUSevereImpact,
        casesForVentilatorsByRequestedTime: infectionsByRequestedTimeVentilatorsSevereImpact,
        dollarsInFlight: infectionsByRequestedTimeIncomeSevereImpact,

    } // your severe case estimation
}

export default covid19ImpactEstimator;
