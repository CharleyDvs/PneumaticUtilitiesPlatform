export const measureAdjustfunctions = {
    CG1: (obj) => {
        let measures = {
            ...obj,
        };
        if (obj.stroke && obj.boreSize) {
            if (Math.abs(obj.boreSize) === 20 && Math.abs(obj.stroke) > 200) {
                measures.ZZ = 20
            }
        }
        return measures;
    }
}