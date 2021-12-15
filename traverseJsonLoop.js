const _ = require('lodash')
// https://stackoverflow.com/questions/5829007/looping-through-json-with-node-js
let dtz = {
    "data": [
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "descri",
            "cfd_text": "Memory error on the Color LCD controller (program memory check sum error."
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "pcause",
            "cfd_text": "The LCD controller PCB fails to validate the integrity of the software at power up."
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "pcause",
            "cfd_text": "Software was not properly updated"
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "pcause",
            "cfd_text": "The Color LCD board exhibits a hardware failure (FLASH/DDR/MCU)."
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "techts",
            "cfd_text": "Memory error on the Color LCD controller (program memory check sum error."
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "techts",
            "cfd_text": "Upgrade software"
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "techts",
            "cfd_text": "Replace Color LCD Controller  due to hardware failure."
        },
        {
            "idcycle_fault_descriptions": 6,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "27",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "descri",
            "cfd_text": "LCD /Touchscreen is blank/white at power up"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "pcause",
            "cfd_text": "Check power source"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "pcause",
            "cfd_text": "Unit interrupted during a firmware upgrade via USB or SD."
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "pcause",
            "cfd_text": "Deffective LCD Controller (or internal USD card not detected)"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "techts",
            "cfd_text": "Check power source"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "techts",
            "cfd_text": "Allow unit to finalize firmware update (about 10 minutes when performed via USB, 20 minutes when automatic update done via internal uSD card)"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "techts",
            "cfd_text": "Perform a firmware upgrade to latest revision via USB drive (download latest version for the specific unit from updates.scican.com)"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "techts",
            "cfd_text": "Replace Color LCD controller"
        },
        {
            "idcycle_fault_descriptions": 8,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "White Sc",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "descri",
            "cfd_text": "Chamber temperature less than a set point after a timeout - cycle phase dependent (pre-wash, wash or rinse) C61 units timeout - 1500s(wash) 2000s(rinse) L110 /M2 units timeout - 4200 s\nor a temperature increase rate of 1ÂºC per 2 minutes was not achieved during â€œCirculation and heatingâ€\u009d phase"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "pcause",
            "cfd_text": "Water heater malfunction"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "pcause",
            "cfd_text": "Water heater wire harness have loose contacts"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "pcause",
            "cfd_text": "Open thermal cut-off switch due to high temperature"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "pcause",
            "cfd_text": "Heater element is interrupted"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "pcause",
            "cfd_text": "Check I/O PCB water heater relay output"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "techts",
            "cfd_text": "Check water heater wire harness for loose contacts"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "techts",
            "cfd_text": "Check for open thermal cut-off switch due to high temperature"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "techts",
            "cfd_text": "Check that the heater element is not interrupted"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "techts",
            "cfd_text": "Check I/O PCB water heater relay output"
        },
        {
            "idcycle_fault_descriptions": 72,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "01",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "descri",
            "cfd_text": "Timeout on filling/emptying up the AirGap reservoir/chamber. C61 - 150s. For RO  - 120s. L110 - 200s. For RO  - 600s. M2 - 180s. For RO  - 200s"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Water supply issue"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Water valves failure"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Air gap water pump failure"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Air gap valve failure"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Air gap Full/Empty level switches failure"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Chamber water level pressure switch malfunction"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "pcause",
            "cfd_text": "Overflow switch malfunction triggering evacuation pump"
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "techts",
            "cfd_text": "Water supply issue :water valves, water pump or air gap valve have failed."
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "techts",
            "cfd_text": "Air gap Full/Empty level switches failed."
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "techts",
            "cfd_text": "Chamber water level pressure switch malfunction."
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "techts",
            "cfd_text": "Overflow switch malfunction triggering evacuation pump."
        },
        {
            "idcycle_fault_descriptions": 73,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "02",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "descri",
            "cfd_text": "Temperature reading outside acceptable range (0Â°C to 100Â°C) for primary or secondary sensor"
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "pcause",
            "cfd_text": "Loose contacts for temperature sensor wires"
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "pcause",
            "cfd_text": "Sensor malfunction"
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "pcause",
            "cfd_text": "I/O PCB malfunction"
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "techts",
            "cfd_text": "This is caused by a temperature sensor malfunction."
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "techts",
            "cfd_text": "Check temperature sensor wires for loose contacts if needed replace sensor with a good one and verify if the CF persist.  Replace I/O PCB"
        },
        {
            "idcycle_fault_descriptions": 74,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "03",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "descri",
            "cfd_text": "Timeout after 120s on water evacuation from the chamber"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "pcause",
            "cfd_text": "Blocked drain tube"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "pcause",
            "cfd_text": "Chamber water level switch malfunction"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "pcause",
            "cfd_text": "Chamber water evacuation pump failure"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "pcause",
            "cfd_text": "Drain pump priming connection hole in the sump blocked"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Blocked drain tube"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Chamber water level switch malfunction"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Chamber water evacuation pump failur"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Drain pump priming connection hole in the sump blocked"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "descri",
            "cfd_text": "Chamber temperature dropped below 80ÂºC/93Â°C during the disinfection phase of the cycle for more than 20s.More than 5% difference in between the Real Time Clock maintained time and CPU maintained time."
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "pcause",
            "cfd_text": "Chamber or the validation temperature sensor is malfunctioning"
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "pcause",
            "cfd_text": "The water heater cannot maintain the disinfection temperature"
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "pcause",
            "cfd_text": "Check calibration"
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "pcause",
            "cfd_text": "Verify temperature sensors"
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "pcause",
            "cfd_text": "Verify water heater"
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "pcause",
            "cfd_text": "Verify I/O board (hardware failure)"
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "techts",
            "cfd_text": "The chamber or the validation temperature sensor is malfunctioning or the water heater cannot maintain the disinfection temperature."
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "techts",
            "cfd_text": "Check calibration and verify temperature sensors."
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "techts",
            "cfd_text": "Verify water heater and I/O board (hardware failure)."
        },
        {
            "idcycle_fault_descriptions": 76,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "05",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 77,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "07",
            "cfd_id": "descri",
            "cfd_text": "Stop button pressed or power failure"
        },
        {
            "idcycle_fault_descriptions": 77,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "07",
            "cfd_id": "pcause",
            "cfd_text": "Loss of power"
        },
        {
            "idcycle_fault_descriptions": 77,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "07",
            "cfd_id": "techts",
            "cfd_text": "Cycle aborted due to loss of power"
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "descri",
            "cfd_text": "AirÂ temperature less than 70Â°C after a minute timeout."
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "pcause",
            "cfd_text": "Loose contacts of air heater wire harness"
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "pcause",
            "cfd_text": "Heater element is interrupted"
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "pcause",
            "cfd_text": "I/O PCB air heater relay output needs to be checked"
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "techts",
            "cfd_text": "This is caused by a heater malfunction: Check air heater wire harness for loose contacts that the heater element is not interrupted."
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "techts",
            "cfd_text": "Check I/O PCB air heater relay output"
        },
        {
            "idcycle_fault_descriptions": 78,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "08",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "descri",
            "cfd_text": "The unit is running a cycle for more than 3h Â±3 min"
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "pcause",
            "cfd_text": "PCB and/or software failure"
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "pcause",
            "cfd_text": "Defective LCD"
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "techts",
            "cfd_text": "Restart program"
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "techts",
            "cfd_text": "Defective PCB and/or software failure"
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "techts",
            "cfd_text": "Replace Color LCD controller"
        },
        {
            "idcycle_fault_descriptions": 79,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "09",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "descri",
            "cfd_text": "Air Dryer RPM not zero when Dryer motor should not be activated"
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "pcause",
            "cfd_text": "Motor driver failure (I/O board)"
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "pcause",
            "cfd_text": "Dryer motor wiring"
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "pcause",
            "cfd_text": "Motor does not stops when in non drying phase"
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "pcause",
            "cfd_text": "I/O board and/or dryer motor defective"
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "techts",
            "cfd_text": "Electronics â€“ motor driver failure (I/O board)."
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "techts",
            "cfd_text": "Check Dryer motor wiring."
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "techts",
            "cfd_text": "Verify that motor stops when in non drying phase."
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "techts",
            "cfd_text": "Replace I/O board and/or  dryer motor."
        },
        {
            "idcycle_fault_descriptions": 80,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "10",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "descri",
            "cfd_text": "Water Filter Clogged (for models equipped with LCS only).Water Filter Pressure Switch failed to trigger during a Handpiece washing phase. CF 12 at the end the 11th cycle started with an expired water filter message"
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "pcause",
            "cfd_text": "LCS adaptor is noy properly seated in chamber"
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "pcause",
            "cfd_text": "LCS is not installed"
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "pcause",
            "cfd_text": "Water filter needs to be replaced"
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "techts",
            "cfd_text": "Check that LCS adaptor is properly seated in chamber."
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "techts",
            "cfd_text": "You selected LCS at program start but LCS is not installed."
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "techts",
            "cfd_text": "Replace water filter:  Unscrew end cap from the LCS handpiece adapter to remove/replace water filter."
        },
        {
            "idcycle_fault_descriptions": 81,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "12",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "descri",
            "cfd_text": "Temperature sensor readings are out of limits. The difference between the control temperature sensor (1) and validation temperature sensor (2) is greater than Â±5ÂºC during the wash phase of the cycle (WD,M2). The difference between the control temperature sensor (1) and validation temperature sensor (2) is greater than Â±2ÂºC during the disinfection phase of the cycle (WD,M2). Chamber temperature above 96Â°C  (C61W,C61WD,M2,L110).Open Temperature sensor(C61W,C61WD,M2,L110)."
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "pcause",
            "cfd_text": "Loose contact wires for temperature sensor"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "pcause",
            "cfd_text": "Water temperature should be below 96Â°C"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "pcause",
            "cfd_text": "Defective Temperature Sensor"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "pcause",
            "cfd_text": "I/O PCB defective"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "techts",
            "cfd_text": "The temperature sensor out of range"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "techts",
            "cfd_text": "Check temperature sensor wires for loose contacts"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "techts",
            "cfd_text": "Run cycle to monitor that the water temperature is below 96Â°C"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "techts",
            "cfd_text": "Replace sensor and verify if the CF persist"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "techts",
            "cfd_text": "Replace I/O PCB"
        },
        {
            "idcycle_fault_descriptions": 82,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "13",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 83,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "14",
            "cfd_id": "descri",
            "cfd_text": "During the Prewash phase the water temperature in the chamber is 5ÂºC higher than the target  (default 28Â°C) for more than 1sec"
        },
        {
            "idcycle_fault_descriptions": 83,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "14",
            "cfd_id": "pcause",
            "cfd_text": "Check water connections."
        },
        {
            "idcycle_fault_descriptions": 83,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "14",
            "cfd_id": "pcause",
            "cfd_text": "Hot and cold water inlets are swapped"
        },
        {
            "idcycle_fault_descriptions": 83,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "14",
            "cfd_id": "techts",
            "cfd_text": "Check water connections. Ensure hot and cold water inlets are not swapped"
        },
        {
            "idcycle_fault_descriptions": 83,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "14",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 84,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "15",
            "cfd_id": "descri",
            "cfd_text": "Water Reservoir Overflow switch active for more than 10s (C61WD,C61W,M2)"
        },
        {
            "idcycle_fault_descriptions": 84,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "15",
            "cfd_id": "pcause",
            "cfd_text": "The water reservoir overflow switch was triggered"
        },
        {
            "idcycle_fault_descriptions": 84,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "15",
            "cfd_id": "techts",
            "cfd_text": "The water reservoir overflow switch was triggered"
        },
        {
            "idcycle_fault_descriptions": 84,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "15",
            "cfd_id": "techts",
            "cfd_text": "Restart program, if message persists, check the water reservoir full switch"
        },
        {
            "idcycle_fault_descriptions": 84,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "15",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 85,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "16",
            "cfd_id": "descri",
            "cfd_text": "Operating temperature for one or both logic boards is too high (higher than 70Â°C)"
        },
        {
            "idcycle_fault_descriptions": 85,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "16",
            "cfd_id": "pcause",
            "cfd_text": "The room or enclosure is too warm and not allowing the unit to adequately cool"
        },
        {
            "idcycle_fault_descriptions": 85,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "16",
            "cfd_id": "pcause",
            "cfd_text": "Fans are not working"
        },
        {
            "idcycle_fault_descriptions": 85,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "16",
            "cfd_id": "techts",
            "cfd_text": "The room or enclosure is too warm and not allowing the unit to adequately cool: check that fans are working"
        },
        {
            "idcycle_fault_descriptions": 85,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "16",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "descri",
            "cfd_text": "Drying Air temperature above 140ÂºC (C61 W, C61WD)"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "pcause",
            "cfd_text": "The air temperature in the air duct is too high"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "techts",
            "cfd_text": "Check dryer motor"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "techts",
            "cfd_text": "Verify that the air heater is not always ON"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "techts",
            "cfd_text": "Verify air temperature sensor"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "techts",
            "cfd_text": "Verify I/O PCB"
        },
        {
            "idcycle_fault_descriptions": 86,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "17",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "descri",
            "cfd_text": "Water Filter Pressure Sensor Stuck on high pressure at Idle (for models equipped with LCS only)"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "pcause",
            "cfd_text": "Pressure switch is stuck"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "pcause",
            "cfd_text": "Verify LCS pressure sensor (stuck)"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "pcause",
            "cfd_text": "Verify LCS wiring"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "pcause",
            "cfd_text": "Check I/O board (hardware failure)"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "techts",
            "cfd_text": "Pressure switch is stuck"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "techts",
            "cfd_text": "Verify LCS pressure sensor (stuck) and  LCS wiring"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "techts",
            "cfd_text": "Check I/O board (hardware failure)"
        },
        {
            "idcycle_fault_descriptions": 87,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "18",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "descri",
            "cfd_text": "Dosing system failed to dispense the preset amount in a predefined time (timeout is 6s/pulse, 1.5ml/pulse). Dosing reservoir level switch does not change from Full ON to OFF by the end of dosing (no chemical dispensed).When If no of pulses is below a threshold, CF is not displayed (C61 units threshold = 2, M2/L110 units threshold = 17)"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "pcause",
            "cfd_text": "Dosing pump or switch error"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "pcause",
            "cfd_text": "Verify bellows dosing pump"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "pcause",
            "cfd_text": "Verify bellows dosing pump switch"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "techts",
            "cfd_text": "Dosing pump or switch error"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "techts",
            "cfd_text": "Verify bellows dosing pump"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "techts",
            "cfd_text": "Verify bellows dosing pump switch"
        },
        {
            "idcycle_fault_descriptions": 90,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "21",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "descri",
            "cfd_text": "Air Temperature error- Ambient temperature sensor broken.Temperature reading outside range (0C - 150C) for the ambient temperature sensor or the Drying Air temperature sensor"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "pcause",
            "cfd_text": "Temperature sensor reading error"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "pcause",
            "cfd_text": "Air temperature sensor wires have loose contacts"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "pcause",
            "cfd_text": "Faulty air temperature sensor"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "pcause",
            "cfd_text": "I/O board defective"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "techts",
            "cfd_text": "Temperature sensor reading error:"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "techts",
            "cfd_text": "Check air temperature sensor wires for loose contacts"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "techts",
            "cfd_text": "Replace sensor with a good one and verify if the CF persist"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "techts",
            "cfd_text": "Replace I/O board"
        },
        {
            "idcycle_fault_descriptions": 91,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "22",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "descri",
            "cfd_text": "Top RPM lower than 4 while washing or disinfecting"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "pcause",
            "cfd_text": "Instrument blocking upper wash arm"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "pcause",
            "cfd_text": "Chamber water level too low"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "pcause",
            "cfd_text": "Water pump failure"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "techts",
            "cfd_text": "Instrument blocking upper wash arm"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "techts",
            "cfd_text": "Chamber water level too low"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "techts",
            "cfd_text": "Water pump failure"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "userts",
            "cfd_text": "Instrument blocking upper wash arm"
        },
        {
            "idcycle_fault_descriptions": 92,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "23",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "descri",
            "cfd_text": "Low RPM lower than 25 while washing or disinfecting"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "pcause",
            "cfd_text": "Instrument blocking lower wash arm"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "pcause",
            "cfd_text": "Chamber water level too low"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "pcause",
            "cfd_text": "Water pump failure"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "techts",
            "cfd_text": "Instrument blocking lower wash arm."
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "techts",
            "cfd_text": "Chamber water level too low.  Water pump had failed"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "userts",
            "cfd_text": "Instrument blocking lower wash arm"
        },
        {
            "idcycle_fault_descriptions": 93,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "24",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "descri",
            "cfd_text": "Vref and VCC drift, post CF 25 if VCC and Vref are more than 3% apart (power supply error)"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "pcause",
            "cfd_text": "The power supply 5V output voltage is fluctuating"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "pcause",
            "cfd_text": "Replace I/O board"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "techts",
            "cfd_text": "The power supply 5V output voltage is fluctuating"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "techts",
            "cfd_text": "Check power supply 5V output"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "techts",
            "cfd_text": "Replace I/O board"
        },
        {
            "idcycle_fault_descriptions": 94,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "25",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "descri",
            "cfd_text": "Problem with air pressure in air line.Air pressure switch fails to trigger when air valve is ON."
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "pcause",
            "cfd_text": "The air valve is malfunctioning"
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "pcause",
            "cfd_text": "Verify air valve (stuck)"
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "pcause",
            "cfd_text": "Check Verify I/O board (hardware failure)"
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "techts",
            "cfd_text": "The air valve is malfunctioning"
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "techts",
            "cfd_text": "Verify air valve (stuck)"
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "techts",
            "cfd_text": "Check Verify I/O board (hardware failure)"
        },
        {
            "idcycle_fault_descriptions": 95,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "26",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "descri",
            "cfd_text": "USB storage device does not contain the last print out"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "pcause",
            "cfd_text": "Corrupted USB file system or micro SD card file system"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Check both USB and micro SD card for errors, should proceed as follows:"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Verify USB drive file system for errors:"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Remove USB drive from Statim unit, insert it into a Windows PC and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Verify micro SD Card for errors"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Remove micro SD card from the Color LCD controller, insert it into the Windows PC (via a micro SD to USB reader, we are using http://www.iogear.com/product/GFR209/ ) and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Remove micro SD card from USB reader and Reinsert micro SD card into the Color LCD Controller"
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "techts",
            "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "userts",
            "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "userts",
            "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
        },
        {
            "idcycle_fault_descriptions": 98,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "USB storage device does not contain the last print out",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "descri",
            "cfd_text": "USB storage device does not contain the last print out"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "pcause",
            "cfd_text": "Corrupted USB file system or micro SD card file system"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Check both USB and micro SD card for errors, should proceed as follows:"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Verify USB drive file system for errors:"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Remove USB drive from Statim unit, insert it into a Windows PC and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Verify micro SD Card for errors"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Remove micro SD card from the Color LCD controller, insert it into the Windows PC (via a micro SD to USB reader, we are using http://www.iogear.com/product/GFR209/ ) and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Remove micro SD card from USB reader and Reinsert micro SD card into the Color LCD Controller"
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "techts",
            "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "userts",
            "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "userts",
            "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
        },
        {
            "idcycle_fault_descriptions": 99,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Printer Fault (XX)",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "descri",
            "cfd_text": "Unit is not sending  mails"
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "pcause",
            "cfd_text": "Unit configuration error (wrong email account or password)"
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "pcause",
            "cfd_text": "Network configuration error (unit not allowed to connect to the mail server  or not properly configured)"
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "techts",
            "cfd_text": "Check email settings by using the TEST button on the unitâ€™s web portal. From the SETUP web page, select the TOOLS tab.  Click on TEST to check your router, unit, and Internet connections. If all settings appear to be OK. Go to the unitâ€™s touchscreen and renew the IP address by following these steps:"
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "techts",
            "cfd_text": "1. Scroll through the setup menu to NETWORK SETUP and select."
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "techts",
            "cfd_text": "2. Select RENEW IP."
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "techts",
            "cfd_text": "Contact IT personnel to verify that the unit is allowed to connect to the configured  mail server (default smtp.scicanupdate.com TCP port 587 or 465)"
        },
        {
            "idcycle_fault_descriptions": 100,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No emails sent",
            "cfd_id": "userts",
            "cfd_text": "Contact IT personnel or dealer service department."
        },
        {
            "idcycle_fault_descriptions": 101,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Unit emails not received",
            "cfd_id": "descri",
            "cfd_text": "Not receiving emails from the unit"
        },
        {
            "idcycle_fault_descriptions": 101,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Unit emails not received",
            "cfd_id": "pcause",
            "cfd_text": "Userâ€™s spam filter"
        },
        {
            "idcycle_fault_descriptions": 101,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Unit emails not received",
            "cfd_id": "pcause",
            "cfd_text": "The unit has not been identified as an accepted email source"
        },
        {
            "idcycle_fault_descriptions": 101,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Unit emails not received",
            "cfd_id": "techts",
            "cfd_text": "Check userâ€™s spam filter. Be certain the unit has been identified as an accepted email source."
        },
        {
            "idcycle_fault_descriptions": 101,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Unit emails not received",
            "cfd_id": "userts",
            "cfd_text": "Contact IT personnel or dealer service department."
        },
        {
            "idcycle_fault_descriptions": 102,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No remote access",
            "cfd_id": "descri",
            "cfd_text": "Unit does not allow remote access"
        },
        {
            "idcycle_fault_descriptions": 102,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No remote access",
            "cfd_id": "pcause",
            "cfd_text": "Network configuration error (unit not allowed to connect to the remote server  or not properly configured)"
        },
        {
            "idcycle_fault_descriptions": 102,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No remote access",
            "cfd_id": "techts",
            "cfd_text": "Contact IT personnel to verify that the unit is allowed to connect to the remote server (updates.scican.com TCP port 465 or 5222)"
        },
        {
            "idcycle_fault_descriptions": 102,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "No remote access",
            "cfd_id": "userts",
            "cfd_text": "Contact IT personnel or dealer service department."
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "descri",
            "cfd_text": "Cycle information not saved to USB drive"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "pcause",
            "cfd_text": "User operation error"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "pcause",
            "cfd_text": "Corrupted USB drive file system"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "pcause",
            "cfd_text": "Deffective Color LCD controller"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "techts",
            "cfd_text": "Additional to the User troubleshooting steps:"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "techts",
            "cfd_text": "Use a uSD to USB adapter to check the internal uSD card for file system errors. Perform a Check Disk on the uSD card (using a Windows PC)"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "techts",
            "cfd_text": "Replace Color LCD controller"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "userts",
            "cfd_text": "Perform a Check Disk on the USB drive (using a Windows PC) in order to eliminate possible USB drive file system corruption"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "userts",
            "cfd_text": "Run cycles while the USB drive is attached to the unit. Verify if the information is saved."
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "userts",
            "cfd_text": "Do not remove USB drive from the unit while the unit saves the information to it  (USB icon is green or flashing while USB drive is active)"
        },
        {
            "idcycle_fault_descriptions": 124,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "Data not saved to USB",
            "cfd_id": "userts",
            "cfd_text": "Contact Dealer or SciCan for help"
        },
        {
            "idcycle_fault_descriptions": 125,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "30",
            "cfd_id": "descri",
            "cfd_text": "LCS Present Switch not active during the circulation phase when LCS option selected."
        },
        {
            "idcycle_fault_descriptions": 125,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "30",
            "cfd_id": "pcause",
            "cfd_text": "LCS Present Switch not active during the circulation phase when LCS option selected"
        },
        {
            "idcycle_fault_descriptions": 125,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "30",
            "cfd_id": "techts",
            "cfd_text": "VerifyÂ  LCS present switch."
        },
        {
            "idcycle_fault_descriptions": 125,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "30",
            "cfd_id": "techts",
            "cfd_text": "CheckÂ  that LCS adapter trolley does not become disengaged during the cycle."
        },
        {
            "idcycle_fault_descriptions": 125,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "30",
            "cfd_id": "userts",
            "cfd_text": "Remove and reinsert the LCS adapter / trolley"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "descri",
            "cfd_text": "Timeout on filling chamber with RO. Timeout C61 - 120s. L110 - 600s. M2 - 200s"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "pcause",
            "cfd_text": "Water supply issue"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "pcause",
            "cfd_text": "Water valves failure"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "pcause",
            "cfd_text": "Chamber water level pressure switch malfunction"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "pcause",
            "cfd_text": "Overflow switch malfunction triggering evacuation pump"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "techts",
            "cfd_text": "Water supply issue : water connection, low RO water pressure/flow, water valves."
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "techts",
            "cfd_text": "Chamber water level pressure switch malfunction."
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "techts",
            "cfd_text": "Overflow switch malfunction triggering evacuation pump."
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "userts",
            "cfd_text": "Verify RO water supply / connection"
        },
        {
            "idcycle_fault_descriptions": 127,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "31",
            "cfd_id": "userts",
            "cfd_text": "Contact dealer service department."
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Water salt level switch damaged/malfunctioning  (intermittent contact when evacuation pump activated). Disconnect salt switch and check that error not displayed anymore. Replace Salt reservoir salt level PCB if faulty"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "pcause",
            "cfd_text": "Salt reservoir sensor activated when evacuation pump active (due to EM noise). Noise induced by this sensor interferes with reading of the other sensors."
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Using IO screen fill chamber with water until chamber level activated. Activate drain pump and monitor Chamber level switch with a multimeter. If chamber full sensor displays on while the meter shows sensor off, repeat test with the salt sensor wiring disconnected. If chamber level sensor displays as expected (off when multimeter shows sensor off), replace salt reservoir level sensor PCB."
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "pcause",
            "cfd_text": "(M2) Air Gap low level switch stuck On"
        },
        {
            "idcycle_fault_descriptions": 75,
            "product_general_name": "HYDRIM-C61WD-G4",
            "cycle_fault_code": "04",
            "cfd_id": "techts",
            "cfd_text": "Run unit using the Debug screen. During initial evacuation phase the lower Air Gap switch should turn off before unit moving to next machine state (filling)"
        }
    ]
}
// console.log(dtz.data.length)
// console.log(dtz.data)


let dataInt = [
      {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "descri",
        "cfd_text": "Memory error on the Color LCD controller (program memory check sum error."
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "pcause",
        "cfd_text": "The LCD controller PCB fails to validate the integrity of the software at power up."
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "pcause",
        "cfd_text": "Software was not properly updated"
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "pcause",
        "cfd_text": "The Color LCD board exhibits a hardware failure (FLASH/DDR/MCU)."
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "techts",
        "cfd_text": "Memory error on the Color LCD controller (program memory check sum error."
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "techts",
        "cfd_text": "Upgrade software"
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "techts",
        "cfd_text": "Replace Color LCD Controller  due to hardware failure."
    },
    {
        "idcycle_fault_descriptions": 6,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "27",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "descri",
        "cfd_text": "LCD /Touchscreen is blank/white at power up"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "pcause",
        "cfd_text": "Check power source"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "pcause",
        "cfd_text": "Unit interrupted during a firmware upgrade via USB or SD."
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "pcause",
        "cfd_text": "Deffective LCD Controller (or internal USD card not detected)"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "techts",
        "cfd_text": "Check power source"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "techts",
        "cfd_text": "Allow unit to finalize firmware update (about 10 minutes when performed via USB, 20 minutes when automatic update done via internal uSD card)"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "techts",
        "cfd_text": "Perform a firmware upgrade to latest revision via USB drive (download latest version for the specific unit from updates.scican.com)"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "techts",
        "cfd_text": "Replace Color LCD controller"
    },
    {
        "idcycle_fault_descriptions": 8,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "White Sc",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "descri",
        "cfd_text": "Chamber temperature less than a set point after a timeout - cycle phase dependent (pre-wash, wash or rinse) C61 units timeout - 1500s(wash) 2000s(rinse) L110 /M2 units timeout - 4200 s\nor a temperature increase rate of 1ÂºC per 2 minutes was not achieved during â€œCirculation and heatingâ€\u009d phase"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "pcause",
        "cfd_text": "Water heater malfunction"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "pcause",
        "cfd_text": "Water heater wire harness have loose contacts"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "pcause",
        "cfd_text": "Open thermal cut-off switch due to high temperature"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "pcause",
        "cfd_text": "Heater element is interrupted"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "pcause",
        "cfd_text": "Check I/O PCB water heater relay output"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "techts",
        "cfd_text": "Check water heater wire harness for loose contacts"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "techts",
        "cfd_text": "Check for open thermal cut-off switch due to high temperature"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "techts",
        "cfd_text": "Check that the heater element is not interrupted"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "techts",
        "cfd_text": "Check I/O PCB water heater relay output"
    },
    {
        "idcycle_fault_descriptions": 72,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "01",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "descri",
        "cfd_text": "Timeout on filling/emptying up the AirGap reservoir/chamber. C61 - 150s. For RO  - 120s. L110 - 200s. For RO  - 600s. M2 - 180s. For RO  - 200s"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Water supply issue"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Water valves failure"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Air gap water pump failure"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Air gap valve failure"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Air gap Full/Empty level switches failure"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Chamber water level pressure switch malfunction"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "pcause",
        "cfd_text": "Overflow switch malfunction triggering evacuation pump"
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "techts",
        "cfd_text": "Water supply issue :water valves, water pump or air gap valve have failed."
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "techts",
        "cfd_text": "Air gap Full/Empty level switches failed."
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "techts",
        "cfd_text": "Chamber water level pressure switch malfunction."
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "techts",
        "cfd_text": "Overflow switch malfunction triggering evacuation pump."
    },
    {
        "idcycle_fault_descriptions": 73,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "02",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "descri",
        "cfd_text": "Temperature reading outside acceptable range (0Â°C to 100Â°C) for primary or secondary sensor"
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "pcause",
        "cfd_text": "Loose contacts for temperature sensor wires"
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "pcause",
        "cfd_text": "Sensor malfunction"
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "pcause",
        "cfd_text": "I/O PCB malfunction"
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "techts",
        "cfd_text": "This is caused by a temperature sensor malfunction."
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "techts",
        "cfd_text": "Check temperature sensor wires for loose contacts if needed replace sensor with a good one and verify if the CF persist.  Replace I/O PCB"
    },
    {
        "idcycle_fault_descriptions": 74,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "03",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "descri",
        "cfd_text": "Timeout after 120s on water evacuation from the chamber"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "pcause",
        "cfd_text": "Blocked drain tube"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "pcause",
        "cfd_text": "Chamber water level switch malfunction"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "pcause",
        "cfd_text": "Chamber water evacuation pump failure"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "pcause",
        "cfd_text": "Drain pump priming connection hole in the sump blocked"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Blocked drain tube"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Chamber water level switch malfunction"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Chamber water evacuation pump failur"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Drain pump priming connection hole in the sump blocked"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "descri",
        "cfd_text": "Chamber temperature dropped below 80ÂºC/93Â°C during the disinfection phase of the cycle for more than 20s.More than 5% difference in between the Real Time Clock maintained time and CPU maintained time."
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "pcause",
        "cfd_text": "Chamber or the validation temperature sensor is malfunctioning"
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "pcause",
        "cfd_text": "The water heater cannot maintain the disinfection temperature"
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "pcause",
        "cfd_text": "Check calibration"
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "pcause",
        "cfd_text": "Verify temperature sensors"
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "pcause",
        "cfd_text": "Verify water heater"
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "pcause",
        "cfd_text": "Verify I/O board (hardware failure)"
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "techts",
        "cfd_text": "The chamber or the validation temperature sensor is malfunctioning or the water heater cannot maintain the disinfection temperature."
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "techts",
        "cfd_text": "Check calibration and verify temperature sensors."
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "techts",
        "cfd_text": "Verify water heater and I/O board (hardware failure)."
    },
    {
        "idcycle_fault_descriptions": 76,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "05",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 77,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "07",
        "cfd_id": "descri",
        "cfd_text": "Stop button pressed or power failure"
    },
    {
        "idcycle_fault_descriptions": 77,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "07",
        "cfd_id": "pcause",
        "cfd_text": "Loss of power"
    },
    {
        "idcycle_fault_descriptions": 77,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "07",
        "cfd_id": "techts",
        "cfd_text": "Cycle aborted due to loss of power"
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "descri",
        "cfd_text": "AirÂ temperature less than 70Â°C after a minute timeout."
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "pcause",
        "cfd_text": "Loose contacts of air heater wire harness"
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "pcause",
        "cfd_text": "Heater element is interrupted"
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "pcause",
        "cfd_text": "I/O PCB air heater relay output needs to be checked"
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "techts",
        "cfd_text": "This is caused by a heater malfunction: Check air heater wire harness for loose contacts that the heater element is not interrupted."
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "techts",
        "cfd_text": "Check I/O PCB air heater relay output"
    },
    {
        "idcycle_fault_descriptions": 78,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "08",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "descri",
        "cfd_text": "The unit is running a cycle for more than 3h Â±3 min"
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "pcause",
        "cfd_text": "PCB and/or software failure"
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "pcause",
        "cfd_text": "Defective LCD"
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "techts",
        "cfd_text": "Restart program"
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "techts",
        "cfd_text": "Defective PCB and/or software failure"
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "techts",
        "cfd_text": "Replace Color LCD controller"
    },
    {
        "idcycle_fault_descriptions": 79,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "09",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "descri",
        "cfd_text": "Air Dryer RPM not zero when Dryer motor should not be activated"
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "pcause",
        "cfd_text": "Motor driver failure (I/O board)"
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "pcause",
        "cfd_text": "Dryer motor wiring"
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "pcause",
        "cfd_text": "Motor does not stops when in non drying phase"
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "pcause",
        "cfd_text": "I/O board and/or dryer motor defective"
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "techts",
        "cfd_text": "Electronics â€“ motor driver failure (I/O board)."
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "techts",
        "cfd_text": "Check Dryer motor wiring."
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "techts",
        "cfd_text": "Verify that motor stops when in non drying phase."
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "techts",
        "cfd_text": "Replace I/O board and/or  dryer motor."
    },
    {
        "idcycle_fault_descriptions": 80,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "10",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "descri",
        "cfd_text": "Water Filter Clogged (for models equipped with LCS only).Water Filter Pressure Switch failed to trigger during a Handpiece washing phase. CF 12 at the end the 11th cycle started with an expired water filter message"
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "pcause",
        "cfd_text": "LCS adaptor is noy properly seated in chamber"
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "pcause",
        "cfd_text": "LCS is not installed"
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "pcause",
        "cfd_text": "Water filter needs to be replaced"
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "techts",
        "cfd_text": "Check that LCS adaptor is properly seated in chamber."
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "techts",
        "cfd_text": "You selected LCS at program start but LCS is not installed."
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "techts",
        "cfd_text": "Replace water filter:  Unscrew end cap from the LCS handpiece adapter to remove/replace water filter."
    },
    {
        "idcycle_fault_descriptions": 81,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "12",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "descri",
        "cfd_text": "Temperature sensor readings are out of limits. The difference between the control temperature sensor (1) and validation temperature sensor (2) is greater than Â±5ÂºC during the wash phase of the cycle (WD,M2). The difference between the control temperature sensor (1) and validation temperature sensor (2) is greater than Â±2ÂºC during the disinfection phase of the cycle (WD,M2). Chamber temperature above 96Â°C  (C61W,C61WD,M2,L110).Open Temperature sensor(C61W,C61WD,M2,L110)."
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "pcause",
        "cfd_text": "Loose contact wires for temperature sensor"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "pcause",
        "cfd_text": "Water temperature should be below 96Â°C"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "pcause",
        "cfd_text": "Defective Temperature Sensor"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "pcause",
        "cfd_text": "I/O PCB defective"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "techts",
        "cfd_text": "The temperature sensor out of range"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "techts",
        "cfd_text": "Check temperature sensor wires for loose contacts"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "techts",
        "cfd_text": "Run cycle to monitor that the water temperature is below 96Â°C"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "techts",
        "cfd_text": "Replace sensor and verify if the CF persist"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "techts",
        "cfd_text": "Replace I/O PCB"
    },
    {
        "idcycle_fault_descriptions": 82,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "13",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 83,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "14",
        "cfd_id": "descri",
        "cfd_text": "During the Prewash phase the water temperature in the chamber is 5ÂºC higher than the target  (default 28Â°C) for more than 1sec"
    },
    {
        "idcycle_fault_descriptions": 83,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "14",
        "cfd_id": "pcause",
        "cfd_text": "Check water connections."
    },
    {
        "idcycle_fault_descriptions": 83,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "14",
        "cfd_id": "pcause",
        "cfd_text": "Hot and cold water inlets are swapped"
    },
    {
        "idcycle_fault_descriptions": 83,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "14",
        "cfd_id": "techts",
        "cfd_text": "Check water connections. Ensure hot and cold water inlets are not swapped"
    },
    {
        "idcycle_fault_descriptions": 83,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "14",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 84,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "15",
        "cfd_id": "descri",
        "cfd_text": "Water Reservoir Overflow switch active for more than 10s (C61WD,C61W,M2)"
    },
    {
        "idcycle_fault_descriptions": 84,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "15",
        "cfd_id": "pcause",
        "cfd_text": "The water reservoir overflow switch was triggered"
    },
    {
        "idcycle_fault_descriptions": 84,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "15",
        "cfd_id": "techts",
        "cfd_text": "The water reservoir overflow switch was triggered"
    },
    {
        "idcycle_fault_descriptions": 84,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "15",
        "cfd_id": "techts",
        "cfd_text": "Restart program, if message persists, check the water reservoir full switch"
    },
    {
        "idcycle_fault_descriptions": 84,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "15",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 85,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "16",
        "cfd_id": "descri",
        "cfd_text": "Operating temperature for one or both logic boards is too high (higher than 70Â°C)"
    },
    {
        "idcycle_fault_descriptions": 85,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "16",
        "cfd_id": "pcause",
        "cfd_text": "The room or enclosure is too warm and not allowing the unit to adequately cool"
    },
    {
        "idcycle_fault_descriptions": 85,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "16",
        "cfd_id": "pcause",
        "cfd_text": "Fans are not working"
    },
    {
        "idcycle_fault_descriptions": 85,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "16",
        "cfd_id": "techts",
        "cfd_text": "The room or enclosure is too warm and not allowing the unit to adequately cool: check that fans are working"
    },
    {
        "idcycle_fault_descriptions": 85,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "16",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "descri",
        "cfd_text": "Drying Air temperature above 140ÂºC (C61 W, C61WD)"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "pcause",
        "cfd_text": "The air temperature in the air duct is too high"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "techts",
        "cfd_text": "Check dryer motor"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "techts",
        "cfd_text": "Verify that the air heater is not always ON"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "techts",
        "cfd_text": "Verify air temperature sensor"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "techts",
        "cfd_text": "Verify I/O PCB"
    },
    {
        "idcycle_fault_descriptions": 86,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "17",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "descri",
        "cfd_text": "Water Filter Pressure Sensor Stuck on high pressure at Idle (for models equipped with LCS only)"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "pcause",
        "cfd_text": "Pressure switch is stuck"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "pcause",
        "cfd_text": "Verify LCS pressure sensor (stuck)"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "pcause",
        "cfd_text": "Verify LCS wiring"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "pcause",
        "cfd_text": "Check I/O board (hardware failure)"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "techts",
        "cfd_text": "Pressure switch is stuck"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "techts",
        "cfd_text": "Verify LCS pressure sensor (stuck) and  LCS wiring"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "techts",
        "cfd_text": "Check I/O board (hardware failure)"
    },
    {
        "idcycle_fault_descriptions": 87,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "18",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "descri",
        "cfd_text": "Dosing system failed to dispense the preset amount in a predefined time (timeout is 6s/pulse, 1.5ml/pulse). Dosing reservoir level switch does not change from Full ON to OFF by the end of dosing (no chemical dispensed).When If no of pulses is below a threshold, CF is not displayed (C61 units threshold = 2, M2/L110 units threshold = 17)"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "pcause",
        "cfd_text": "Dosing pump or switch error"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "pcause",
        "cfd_text": "Verify bellows dosing pump"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "pcause",
        "cfd_text": "Verify bellows dosing pump switch"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "techts",
        "cfd_text": "Dosing pump or switch error"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "techts",
        "cfd_text": "Verify bellows dosing pump"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "techts",
        "cfd_text": "Verify bellows dosing pump switch"
    },
    {
        "idcycle_fault_descriptions": 90,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "21",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "descri",
        "cfd_text": "Air Temperature error- Ambient temperature sensor broken.Temperature reading outside range (0C - 150C) for the ambient temperature sensor or the Drying Air temperature sensor"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "pcause",
        "cfd_text": "Temperature sensor reading error"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "pcause",
        "cfd_text": "Air temperature sensor wires have loose contacts"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "pcause",
        "cfd_text": "Faulty air temperature sensor"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "pcause",
        "cfd_text": "I/O board defective"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "techts",
        "cfd_text": "Temperature sensor reading error:"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "techts",
        "cfd_text": "Check air temperature sensor wires for loose contacts"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "techts",
        "cfd_text": "Replace sensor with a good one and verify if the CF persist"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "techts",
        "cfd_text": "Replace I/O board"
    },
    {
        "idcycle_fault_descriptions": 91,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "22",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "descri",
        "cfd_text": "Top RPM lower than 4 while washing or disinfecting"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "pcause",
        "cfd_text": "Instrument blocking upper wash arm"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "pcause",
        "cfd_text": "Chamber water level too low"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "pcause",
        "cfd_text": "Water pump failure"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "techts",
        "cfd_text": "Instrument blocking upper wash arm"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "techts",
        "cfd_text": "Chamber water level too low"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "techts",
        "cfd_text": "Water pump failure"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "userts",
        "cfd_text": "Instrument blocking upper wash arm"
    },
    {
        "idcycle_fault_descriptions": 92,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "23",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "descri",
        "cfd_text": "Low RPM lower than 25 while washing or disinfecting"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "pcause",
        "cfd_text": "Instrument blocking lower wash arm"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "pcause",
        "cfd_text": "Chamber water level too low"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "pcause",
        "cfd_text": "Water pump failure"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "techts",
        "cfd_text": "Instrument blocking lower wash arm."
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "techts",
        "cfd_text": "Chamber water level too low.  Water pump had failed"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "userts",
        "cfd_text": "Instrument blocking lower wash arm"
    },
    {
        "idcycle_fault_descriptions": 93,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "24",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "descri",
        "cfd_text": "Vref and VCC drift, post CF 25 if VCC and Vref are more than 3% apart (power supply error)"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "pcause",
        "cfd_text": "The power supply 5V output voltage is fluctuating"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "pcause",
        "cfd_text": "Replace I/O board"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "techts",
        "cfd_text": "The power supply 5V output voltage is fluctuating"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "techts",
        "cfd_text": "Check power supply 5V output"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "techts",
        "cfd_text": "Replace I/O board"
    },
    {
        "idcycle_fault_descriptions": 94,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "25",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "descri",
        "cfd_text": "Problem with air pressure in air line.Air pressure switch fails to trigger when air valve is ON."
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "pcause",
        "cfd_text": "The air valve is malfunctioning"
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "pcause",
        "cfd_text": "Verify air valve (stuck)"
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "pcause",
        "cfd_text": "Check Verify I/O board (hardware failure)"
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "techts",
        "cfd_text": "The air valve is malfunctioning"
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "techts",
        "cfd_text": "Verify air valve (stuck)"
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "techts",
        "cfd_text": "Check Verify I/O board (hardware failure)"
    },
    {
        "idcycle_fault_descriptions": 95,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "26",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "descri",
        "cfd_text": "USB storage device does not contain the last print out"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "pcause",
        "cfd_text": "Corrupted USB file system or micro SD card file system"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Check both USB and micro SD card for errors, should proceed as follows:"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Verify USB drive file system for errors:"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Remove USB drive from Statim unit, insert it into a Windows PC and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Verify micro SD Card for errors"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Remove micro SD card from the Color LCD controller, insert it into the Windows PC (via a micro SD to USB reader, we are using http://www.iogear.com/product/GFR209/ ) and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Remove micro SD card from USB reader and Reinsert micro SD card into the Color LCD Controller"
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "techts",
        "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "userts",
        "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "userts",
        "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
    },
    {
        "idcycle_fault_descriptions": 98,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "USB storage device does not contain the last print out",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "descri",
        "cfd_text": "USB storage device does not contain the last print out"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "pcause",
        "cfd_text": "Corrupted USB file system or micro SD card file system"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Check both USB and micro SD card for errors, should proceed as follows:"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Verify USB drive file system for errors:"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Remove USB drive from Statim unit, insert it into a Windows PC and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Verify micro SD Card for errors"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Remove micro SD card from the Color LCD controller, insert it into the Windows PC (via a micro SD to USB reader, we are using http://www.iogear.com/product/GFR209/ ) and perform a Check disk (Right click on the specific drive in My Computer, Select Properties, Select Check Now, and then press Start"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Remove micro SD card from USB reader and Reinsert micro SD card into the Color LCD Controller"
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "techts",
        "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "userts",
        "cfd_text": "Re-insert the USB storage device and wait for the data to copy over again. If problem persists, back up all the information on the USB device and reformat it."
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "userts",
        "cfd_text": "NOTE: the web portal allows access to all of the unitâ€™s cycle information."
    },
    {
        "idcycle_fault_descriptions": 99,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Printer Fault (XX)",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "descri",
        "cfd_text": "Unit is not sending  mails"
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "pcause",
        "cfd_text": "Unit configuration error (wrong email account or password)"
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "pcause",
        "cfd_text": "Network configuration error (unit not allowed to connect to the mail server  or not properly configured)"
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "techts",
        "cfd_text": "Check email settings by using the TEST button on the unitâ€™s web portal. From the SETUP web page, select the TOOLS tab.  Click on TEST to check your router, unit, and Internet connections. If all settings appear to be OK. Go to the unitâ€™s touchscreen and renew the IP address by following these steps:"
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "techts",
        "cfd_text": "1. Scroll through the setup menu to NETWORK SETUP and select."
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "techts",
        "cfd_text": "2. Select RENEW IP."
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "techts",
        "cfd_text": "Contact IT personnel to verify that the unit is allowed to connect to the configured  mail server (default smtp.scicanupdate.com TCP port 587 or 465)"
    },
    {
        "idcycle_fault_descriptions": 100,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No emails sent",
        "cfd_id": "userts",
        "cfd_text": "Contact IT personnel or dealer service department."
    },
    {
        "idcycle_fault_descriptions": 101,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Unit emails not received",
        "cfd_id": "descri",
        "cfd_text": "Not receiving emails from the unit"
    },
    {
        "idcycle_fault_descriptions": 101,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Unit emails not received",
        "cfd_id": "pcause",
        "cfd_text": "Userâ€™s spam filter"
    },
    {
        "idcycle_fault_descriptions": 101,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Unit emails not received",
        "cfd_id": "pcause",
        "cfd_text": "The unit has not been identified as an accepted email source"
    },
    {
        "idcycle_fault_descriptions": 101,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Unit emails not received",
        "cfd_id": "techts",
        "cfd_text": "Check userâ€™s spam filter. Be certain the unit has been identified as an accepted email source."
    },
    {
        "idcycle_fault_descriptions": 101,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Unit emails not received",
        "cfd_id": "userts",
        "cfd_text": "Contact IT personnel or dealer service department."
    },
    {
        "idcycle_fault_descriptions": 102,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No remote access",
        "cfd_id": "descri",
        "cfd_text": "Unit does not allow remote access"
    },
    {
        "idcycle_fault_descriptions": 102,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No remote access",
        "cfd_id": "pcause",
        "cfd_text": "Network configuration error (unit not allowed to connect to the remote server  or not properly configured)"
    },
    {
        "idcycle_fault_descriptions": 102,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No remote access",
        "cfd_id": "techts",
        "cfd_text": "Contact IT personnel to verify that the unit is allowed to connect to the remote server (updates.scican.com TCP port 465 or 5222)"
    },
    {
        "idcycle_fault_descriptions": 102,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "No remote access",
        "cfd_id": "userts",
        "cfd_text": "Contact IT personnel or dealer service department."
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "descri",
        "cfd_text": "Cycle information not saved to USB drive"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "pcause",
        "cfd_text": "User operation error"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "pcause",
        "cfd_text": "Corrupted USB drive file system"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "pcause",
        "cfd_text": "Deffective Color LCD controller"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "techts",
        "cfd_text": "Additional to the User troubleshooting steps:"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "techts",
        "cfd_text": "Use a uSD to USB adapter to check the internal uSD card for file system errors. Perform a Check Disk on the uSD card (using a Windows PC)"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "techts",
        "cfd_text": "Replace Color LCD controller"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "userts",
        "cfd_text": "Perform a Check Disk on the USB drive (using a Windows PC) in order to eliminate possible USB drive file system corruption"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "userts",
        "cfd_text": "Run cycles while the USB drive is attached to the unit. Verify if the information is saved."
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "userts",
        "cfd_text": "Do not remove USB drive from the unit while the unit saves the information to it  (USB icon is green or flashing while USB drive is active)"
    },
    {
        "idcycle_fault_descriptions": 124,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "Data not saved to USB",
        "cfd_id": "userts",
        "cfd_text": "Contact Dealer or SciCan for help"
    },
    {
        "idcycle_fault_descriptions": 125,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "30",
        "cfd_id": "descri",
        "cfd_text": "LCS Present Switch not active during the circulation phase when LCS option selected."
    },
    {
        "idcycle_fault_descriptions": 125,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "30",
        "cfd_id": "pcause",
        "cfd_text": "LCS Present Switch not active during the circulation phase when LCS option selected"
    },
    {
        "idcycle_fault_descriptions": 125,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "30",
        "cfd_id": "techts",
        "cfd_text": "VerifyÂ  LCS present switch."
    },
    {
        "idcycle_fault_descriptions": 125,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "30",
        "cfd_id": "techts",
        "cfd_text": "CheckÂ  that LCS adapter trolley does not become disengaged during the cycle."
    },
    {
        "idcycle_fault_descriptions": 125,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "30",
        "cfd_id": "userts",
        "cfd_text": "Remove and reinsert the LCS adapter / trolley"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "descri",
        "cfd_text": "Timeout on filling chamber with RO. Timeout C61 - 120s. L110 - 600s. M2 - 200s"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "pcause",
        "cfd_text": "Water supply issue"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "pcause",
        "cfd_text": "Water valves failure"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "pcause",
        "cfd_text": "Chamber water level pressure switch malfunction"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "pcause",
        "cfd_text": "Overflow switch malfunction triggering evacuation pump"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "techts",
        "cfd_text": "Water supply issue : water connection, low RO water pressure/flow, water valves."
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "techts",
        "cfd_text": "Chamber water level pressure switch malfunction."
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "techts",
        "cfd_text": "Overflow switch malfunction triggering evacuation pump."
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "userts",
        "cfd_text": "Verify RO water supply / connection"
    },
    {
        "idcycle_fault_descriptions": 127,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "31",
        "cfd_id": "userts",
        "cfd_text": "Contact dealer service department."
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Water salt level switch damaged/malfunctioning  (intermittent contact when evacuation pump activated). Disconnect salt switch and check that error not displayed anymore. Replace Salt reservoir salt level PCB if faulty"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "pcause",
        "cfd_text": "Salt reservoir sensor activated when evacuation pump active (due to EM noise). Noise induced by this sensor interferes with reading of the other sensors."
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Using IO screen fill chamber with water until chamber level activated. Activate drain pump and monitor Chamber level switch with a multimeter. If chamber full sensor displays on while the meter shows sensor off, repeat test with the salt sensor wiring disconnected. If chamber level sensor displays as expected (off when multimeter shows sensor off), replace salt reservoir level sensor PCB."
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "pcause",
        "cfd_text": "(M2) Air Gap low level switch stuck On"
    },
    {
        "idcycle_fault_descriptions": 75,
        "product_general_name": "HYDRIM-C61WD-G4",
        "cycle_fault_code": "04",
        "cfd_id": "techts",
        "cfd_text": "Run unit using the Debug screen. During initial evacuation phase the lower Air Gap switch should turn off before unit moving to next machine state (filling)"
    }
]


let resp = {data: []}

// Returns a array of each one different object filtered by cycle_fault_code - one element for each cycle_fault_code
let res = _.uniqBy(dtz.data, 'cycle_fault_code')
// console.log(res.length)
// console.log(res)
// console.log('_____________')

// Loop through each 'cycle_fault_code'
for(let i = 0; i < res.length; i++){
  // console.log(res[i].cycle_fault_code)
  // console.log(_.filter(dtz.data, {cycle_fault_code: res[i].cycle_fault_code}))

  //Serach in the main array (dtz.data) and Returns an array subset of elements filtered by the res[i].cycle_fault_code. A subset for each cycle_fault_code
  let arrFilterByCFC = _.filter(dtz.data, {cycle_fault_code: res[i].cycle_fault_code})
  // console.log('***** i='+i+' ***** cycle_fault_code = '+res[i].cycle_fault_code+' ***** arrFilterByCFC.length = '+arrFilterByCFC.length+' *****')
  // console.log(arrFilterByCFC)
  // console.log('**********')

  //Each 'cycle_fault_code' iteration will cleanup and initialize the object
  let obj = {
    //Takes the information from the first obj inside arrFilterByCFC
    model: arrFilterByCFC[0].product_general_name,
    //Inside cycle_faults 1 object for each cycle_fault_code populated in the next step
    cycle_faults: []
  }
  // console.log(obj)

  let obj2 = {
    id: arrFilterByCFC[0].idcycle_fault_descriptions,
    cycle_number: arrFilterByCFC[0].cycle_fault_code,
    description: arrFilterByCFC[0].cfd_id === 'descri' ? arrFilterByCFC[0].cfd_text:null, // if cfd_id = descri then arrFilterByCFC[0].cfd_id,
    probable_cause: [],
    tech_troubleshooting: [],
    user_troubleshooting: []
  }

  for(let j = 0; j < arrFilterByCFC.length; j++) {
    // obj2.id = arrFilterByCFC[j].idcycle_fault_descriptions
    // obj2.cycle_number = arrFilterByCFC[j].cycle_fault_code
    // obj2.description = arrFilterByCFC[j].cfd_id

    // console.log(obj2)
    // console.log('=======')
    if (arrFilterByCFC[j].cfd_id === 'pcause'){
      // console.log(arrFilterByCFC[j].cfd_text)
      obj2.probable_cause.push(arrFilterByCFC[j].cfd_text)
    } else if(arrFilterByCFC[j].cfd_id === 'techts') {
      // console.log(arrFilterByCFC[j].cfd_text === 'techts')
      obj2.tech_troubleshooting.push(arrFilterByCFC[j].cfd_text)
    } else if(arrFilterByCFC[j].cfd_id === 'userts') {
      // console.log(arrFilterByCFC[j].cfd_text === 'techts')
      obj2.user_troubleshooting.push(arrFilterByCFC[j].cfd_text)
    }
    console.log(obj2)
  }

  obj.cycle_faults.push(obj2)
  resp.data.push(obj)
}


// console.log(resp.data[0])