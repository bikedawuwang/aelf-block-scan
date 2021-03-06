/**
 * @file calculateCrossConnectorReturn
 * @author zhouminghui
 * Computing Equivalent Value
 */

const ln = require('./ln');

module.exports = function scalculateCrossConnectorReturn(ResBalance, ResWeight, ElfBalance, ElfWeight, pidRes) {
    const bf = parseFloat(ResBalance);
    const wf = parseFloat(ResWeight);
    const bt = parseFloat(ElfBalance);
    const wt = parseFloat(ElfWeight);
    const a = parseFloat(pidRes);
    if (wf === wt) {
        // if both weights are the same, the formula can be reduced
        return (bt * a / (bf + a));
    }

    const x = bf / (bf + a);
    const y = wf / wt;
    return (bt * (1 - Math.exp(y * ln(x))));

};
