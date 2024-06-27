

export function EquipmentSetup({isHidden}) {
    console.log(isHidden);
    if (isHidden) return null;
    return <div className="equipment-setup">
        <button className="close-btn">x</button>
        <div className="skill-pattern" name="skill-pattern">
            <label for="skill-pattern">Skill Pattern: </label>
            <input type="checkbox" className="skill-pattern-check"/>
            <input type="checkbox" className="skill-pattern-check"/>
            <input type="checkbox" className="skill-pattern-check"/>
        </div>
        <div className="relics">
            <label for="relics">Relics: </label>
            <button className="relic"></button>
            <button className="relic"></button>
            <button className="relic"></button>
        </div>
        <div className="lightcone">
            <label for="lightcone">Lightcone: </label>
            <button className="lightcone-btn"></button>
        </div>
        <div className="ult-activation">
            <label for="ult-activation">Ult activation: </label>
            <button className="ult-dropdown" type="dropbtn">none</button>
        </div>
        <div className="stats">
            <label for="speed">Speed: </label>
            <input name="speed"></input>
            <label for="eidolons">Eidolons: </label>
            <input name="eidolons"></input>
            <label for="energy-recharge">Energy-recharge: </label>
            <input name="energy-recharge"></input>
        </div>
        </div>
}