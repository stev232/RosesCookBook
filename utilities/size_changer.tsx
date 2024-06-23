/* 
** Measurement conversion guide **
     *** Dry measurements ***
Cups: 1 cup = 16 TableSpoons  | Cup * 16
      1 cup = 48 TeaSpoones   | Cup * 48

TableSpoon: 1 TableSpoon = 3 TeaSpoons | TableSpoon *3 

1/3 Cup = 5 TableSpoons + 1 TeaSpoon OR 16 Teaspoons

   *** Liquids measurements ***
Gallons: 1 Gallon = 4 Quarts
         1 Gallon = 8 Pints
         1 Gallon = 16 Cups
         1 Gallon = 128 Fluid Ounces
         1 Gallon = 256 TableSpoons

Quarts:  1 Quart = 1/4 Gallon
         1 Quart = 2 Pints
         1 Quart = 4 Cups
         1 Quart = 32 Fluid Ounces
         1 Quart = 64 TableSpoons

Pints:   1 Pint = 1/8 Gallon
         1 Pint = 1/2 Quart
         1 Pint = 2 Cups
         1 Pint = 16 Fluid Ounces
         1 Pint = 32 TableSpoons

Cups:    1 Cup = 1/16 Gallons
         1 Cup = 1/4 Quart
         1 Cup = 1/2 Pint
         1 Cup = 8 Fluid Ounces
         1 Cup = 16 TableSpoons
*/

/*
Imperial Measurements
** Teaspoon = t or tsp
** Tablespoon = T, TB, tbsp
** Cup = C or c
** Pint = pt
** Quart = qt
** Gallon = gal
** Ounce = oz
** Fluid Ounce = fl oz
** Pound = lb

Metric Measurements
** Milliter = mL
** Liter = L or l
** Gram = g
** Kilogram = kg

*** Conversion Guide
** 250 grams = 1 cup
** 3 Tsp OR 1 Tbsp = 15ml
** 2 fluid ounces OR 1/4 cup = 50 ml
*/

// Expected JSON {originalUnit: "", originalAmount: <num>, unitType: "", convertTo: ""}
export function drySameUnitSystem(data:any) {
    const originalUnit:string = data.OriginalUnit;
    const originalAmount:number = data.originalAmount;
    const unitType:string = data.unitType;
    const convertTo:string = data.ConvertTo;

    if(unitType === "Imperial") {
        switch (convertTo) {
            case "C": {
                switch(originalUnit) {
                    case "T": {
                        return originalAmount/16;
                    }
                    case "t": {
                        return originalAmount/48;
                    }
                    default: {
                        return "Invalid unit Type";
                    }
                }
            }
            case "T": {
                switch(originalUnit) {
                    case "C": {
                        return originalAmount*16;
                    }
                    case "t": {
                        return originalAmount/3;
                    }
                    default: {
                        return "Invalid unit Type";
                    }
                }
            }
            case "t": {
                switch(originalUnit) {
                    case "C": {
                        return originalAmount*48;
                    }
                    case "T": {
                        return originalAmount*3;
                    }
                    default: {
                        return "Invalid unit Type";
                    }
                }
            }
            default: {
                return "Invalid unit Type";
            }
        }
    } else {
        if(originalUnit.toUpperCase() === "G") {
            return originalAmount/1000;
        } else {
            return originalAmount*1000;
        }
    }

}

export function wetSameUnitSystem(data:any) {

}

export function dryConvertUnitSystem(data:any) {

}

export function wetConvertUnitSystem(data:any) {

}